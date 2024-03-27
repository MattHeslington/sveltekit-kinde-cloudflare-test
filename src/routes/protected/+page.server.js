import { kindeAuthClient } from '@kinde-oss/kinde-auth-sveltekit'
import { redirect } from '@sveltejs/kit'

export async function load({ request }) {
	const isAuthenticated = await kindeAuthClient.isAuthenticated(request) // Boolean: true or false
	if (isAuthenticated) {
		// Need to implement, e.g: call an api, etc...
	} else {
		redirect(302, '/login')
	}
	return {
		isAuthenticated
	}
}
