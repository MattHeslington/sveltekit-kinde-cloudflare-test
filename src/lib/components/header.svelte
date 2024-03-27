<script>
	export let user
	export let isAuthenticated
	$: console.log('header user', user)
	$: console.log('header isAuthenticated', isAuthenticated)
</script>

<header class="flex h-[72px] w-full items-center justify-between">
	<a href="/"><h1>logo</h1></a>
	<nav class="items-end justify-end space-x-5">
		<a href="/protected">protected</a>
		{#if isAuthenticated}
			<a href="/profile">profile</a>
			<a href="/logout">log out</a>
		{:else}
			<a href="/login">login</a>
			<a href="/signup">sign up</a>
		{/if}
	</nav>
</header>
