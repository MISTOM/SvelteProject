<script>
    import { page } from '$app/stores'
    import Header from '$lib/Header.svelte'
    import Footer from '$lib/Footer.svelte'

    export let data
    const username = data.username
</script>

<svelte:head>
    <title> { $page.data.title || 'Sveltekit Pilot'}</title>
</svelte:head>

{#if $page.data.notification}
    <p> { $page.data.notification }</p>
{/if}

<style>
    p {
        margin: 0;
        
    }
</style>

<Header {username}/>
<slot/>
<Footer/>