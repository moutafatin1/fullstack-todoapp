import { prisma } from '$lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';
import * as argon2 from 'argon2';
import * as cookie from 'cookie';

export const post: RequestHandler = async ({ request }) => {
	const form = await request.formData();
	const username = form.get('username');
	const password = form.get('password');

	if (typeof username !== 'string' || typeof password !== 'string') {
		return {
			status: 400,
			body: {
				error: 'Enter a valid username and password.'
			}
		};
	}

	if (!username || !password) {
		return {
			status: 400,
			body: {
				error: 'Username and password are required.'
			}
		};
	}

	const user = await prisma.user.findUnique({
		where: {
			username
		}
	});

	if (!user) {
		return {
			status: 404,
			body: {
				error: 'user not found'
			}
		};
	}

	const passwordMatch = await argon2.verify(user.passwordHash, password);

	if (!passwordMatch) {
		return {
			status: 400,
			body: {
				error: 'wrong credentials'
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
