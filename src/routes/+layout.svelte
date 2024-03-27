<script>
	export let data
	import '../app.pcss'
	import Header from '$lib/components/header.svelte'
	$: console.log('layout client data', data)
</script>

<div class="flex h-screen w-screen flex-col px-5">
	<Header isAuthenticated={data.isAuthenticated} user={data.userProfile} />
	<slot />
</div>

<svelte:head>
	<title>Kinde Template</title>
</svelte:head>
