import { prisma } from '$lib/prisma';
import { formValidation } from '$root/lib/utils';
import type { RequestHandler } from '@sveltejs/kit';
import * as argon2 from 'argon2';
import * as cookie from 'cookie';
import { z } from 'zod';

const schemaRegister = z.object({
	username: z
		.string({ required_error: 'Username is required' })
		.min(6, 'Username myst be at least 6 charachters long'),
	password: z.string().min(6, 'Password myst be at least 6 charachters long')
});

type SchemaRegister = z.TypeOf<typeof schemaRegister>;

export const post: RequestHandler = async ({ request }) => {
	const { formData, errors } = await formValidation<SchemaRegister>({
		request,
		schema: schemaRegister
	});

	if (errors) {
		return {
			status: 400,
			body: {
				errors
			}
		};
	}
	const { password, username } = formData;

	try {
		const user = await prisma.user.create({
			data: {
				username,
				passwordHash: await argon2.hash(password)
			}
		});

		return {
			status: 200,
			body: {
				user: { username }
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
	} catch (error) {
		return {
			status: 400,
			body: {
				errors: {
					error: 'User already exists.'
				}
			}
		};
	}
};
