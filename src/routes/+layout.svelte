<script>
    import Header from '$lib/Header.svelte'
    import Footer from '$lib/Footer.svelte'

    export let data
    const username = data.username
</script>

<Header {username}/>
<slot/>
<Footer/>