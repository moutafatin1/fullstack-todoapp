import { prisma } from '$lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';
import * as argon2 from 'argon2';

export const post: RequestHandler = async ({ request }) => {
	const form = await request.formData();
	const username = form.get('username');
	const email = form.get('email');
	const password = form.get('password');

	// TODO: Validation

	if (
		typeof username !== 'string' ||
		typeof password !== 'string' ||
		typeof email !== 'string'
	) {
		return {
			status: 400,
			body: {
				error: 'something went wrong'
			}
		};
	}

	if (!username || !password || !email) {
		return {
			status: 400,
			body: {
				error: 'fields required'
			}
		};
	}

	try {
		await prisma.user.create({
			data: {
				username,
				email,
				passwordHash: await argon2.hash(password)
			}
		});

		return {
			status: 200,
			body: {
				success: 'Success'
			}
		};
	} catch (error) {
		return {
			status: 400,
			body: {
				error: 'User already exists.'
			}
		};
	}
};
