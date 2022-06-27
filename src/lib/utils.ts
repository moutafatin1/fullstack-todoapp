import type { ZodError, ZodSchema } from 'zod';

type ActionErrors<T> = Partial<Record<keyof T, string>>;

export async function formValidation<ActionInput>({
	request,
	schema
}: {
	request: Request;
	schema: ZodSchema;
}) {
	const formData = await request.formData();
	const username = formData.get('username');
	const password = formData.get('password');

	try {
		const formData = schema.parse({ username, password }) as ActionInput;

		console.log('🚀 ~ file: utils.ts ~ line 16 ~ formData', formData);
		return { formData, errors: null };
	} catch (error) {
		const errors = error as ZodError<ActionInput>;
		return {
			formData: { username, password },
			errors: errors.issues.reduce((acc: ActionErrors<ActionInput>, curr) => {
				const key = curr.path[0] as keyof ActionInput;

				acc[key] = curr.message;
				return acc;
			}, {})
		};
	}
}
