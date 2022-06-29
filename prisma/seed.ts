import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();
async function seed() {
	const user = await prisma.user.create({
		data: {
			username: 'oussama',
			passwordHash: await argon2.hash('oussama')
		}
	});

	const tasks = [
		{ body: 'Implement this feature', userId: user.id },
		{ body: 'Completed Sidebar', userId: user.id },
		{ body: 'Continue learning svelte', userId: user.id },
		{ body: 'Learn an practice andrie javascript course', userId: user.id }
	];

	for (const task of tasks) {
		await prisma.task.create({
			data: task
		});
	}
}

seed()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
