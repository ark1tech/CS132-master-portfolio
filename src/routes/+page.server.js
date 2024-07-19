export async function load({ fetch }) {
	const res = await fetch(`/api`);
	const data = await res.json();
	return { ...data };
}
