<script>
	export let data
</script>

<div>profile</div>
{#if data.isAuthenticated}
	<div>{data.userProfile.given_name}</div>
{/if}
