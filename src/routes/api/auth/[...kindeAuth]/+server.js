import { handleAuth } from '@kinde-oss/kinde-auth-sveltekit'

export function GET(requestEvents) {
	return handleAuth(requestEvents)
}
