import { prisma } from '$root/lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';

export const patch: RequestHandler = async ({ request, params }) => {
	const formData = await request.formData();
	const isCompleted = formData.get('isCompleted');
	const isImportantData = formData.get('isImportant');
	if (isImportantData) {
		await setImporant(params.taskId, isImportantData === 'true' ? false : true);
	}

	if (isCompleted) {
		await setCompleted(params.taskId, isCompleted === 'true' ? false : true);
	}

	return {
		status: 303,
		headers: {
			location: '/app/all'
		}
	};
};

const setImporant = async (id: string, isImportant: boolean) => {
	await prisma.task.update({
		where: {
			id
		},
		data: {
			isImportant
		}
	});
};

const setCompleted = async (id: string, isCompleted: boolean) => {
	await prisma.task.update({
		where: {
			id
		},
		data: {
			isCompleted
		}
	});
};
