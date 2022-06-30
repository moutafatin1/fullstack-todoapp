import { prisma } from '$root/lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const tasks = await prisma.task.findMany();
	return {
		status: 200,
		body: {
			tasks
		}
	};
};
