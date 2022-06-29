import { prisma } from '$lib/prisma';
import { formValidation } from '$root/lib/utils';
import type { RequestHandler } from '@sveltejs/kit';
import * as argon2 from 'argon2';
import * as cookie from 'cookie';
import { z } from 'zod';

const schemaLogin = z.object({
	username: z
		.string({ required_error: 'Username is required' })
		.min(6, 'Username myst be at least 6 charachters long'),
	password: z.string().min(6, 'Password myst be at least 6 charachters long')
});

type FormData = z.TypeOf<typeof schemaLogin>;

export const post: RequestHandler = async ({ request }) => {
	const { formData, errors } = await formValidation<FormData>({
		request,
		schema: schemaLogin
	});

	if (errors) {
		return {
			status: 400,
			body: {
				errors
			}
		};
	}

	const { username, password } = formData;

	const user = await prisma.user.findUnique({
		where: {
			username
		}
	});

	if (!user) {
		return {
			status: 404,
			body: {
				errors: {
					error: "User doesn't exists"
				}
			}
		};
	}

	const passwordMatch = await argon2.verify(user.passwordHash, password);

	if (!passwordMatch) {
		return {
			status: 400,
			body: {
				errors: {
					error: 'Incorrect Credentials'
				}
			}
		};
	}

	return {
		status: 200,
		body: {
			user: { username },
			success: 'Success'
		},
		headers: {
			'Set-Cookie': cookie.serialize('kitSession', user.userAuthToken, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 30
			})
		}
	};
};
