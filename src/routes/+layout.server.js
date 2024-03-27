import { kindeAuthClient } from '@kinde-oss/kinde-auth-sveltekit'

export async function load({ request }) {
	const isAuthenticated = await kindeAuthClient.isAuthenticated(request) // Boolean: true or false
	const userProfile = await kindeAuthClient.getUser(request)
	if (isAuthenticated) {
	} else {
		// Need to implement, e.g: redirect user to sign in, etc..
	}
	return {
		isAuthenticated,
		userProfile
	}
}
