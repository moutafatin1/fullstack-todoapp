import { prisma } from '$root/lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';
import { z } from 'zod';

export const get: RequestHandler = async ({ locals }) => {
	const tasks = await prisma.task.findMany({
		where: {
			userId: locals.user?.id
		}
	});
	return {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		},
		body: {
			tasks
		}
	};
};

const taskSchema = z
	.string({ required_error: 'Task is required' })
	.min(6, 'task must be at least 6 characters long');

type TaskSchema = z.TypeOf<typeof taskSchema>;

export const post: RequestHandler = async ({ request, locals }) => {
	if (!locals.user) {
		return {
			status: 302,
			headers: {
				location: '/login'
			}
		};
	}
	const formData = await request.formData();
	const task = formData.get('task');

	const validationResult = taskSchema.safeParse(task);

	if (!validationResult.success) {
		return {
			status: 400,
			body: {
				errors: validationResult.error.flatten().formErrors[0]
			}
		};
	}

	const validatedTask = validationResult.data;

	const createdTask = await prisma.task.create({
		data: {
			body: validatedTask,
			userId: locals.user?.id
		}
	});

	return {
		status: 201
	};
};
