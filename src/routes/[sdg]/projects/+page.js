export const prerender = true;
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const sdg = params.sdg.split('-')[1];
	if (sdg === '12' || sdg === '17') {
		throw new error(404, {
			message: `Not Found`,
			description: `Unfortunately, we have no projects in SDG ${sdg} right now.`
		});
	}

	return {
		params: params
	};
};
