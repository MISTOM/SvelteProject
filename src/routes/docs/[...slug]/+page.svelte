<script>
    import { page } from '$app/stores'

    const slugArr = $page.params.slug.split('/')
    console.log(slugArr)
</script>




<h1>Docs</h1>
{ #if slugArr.length === 1 }

    <p>Viewing docs for feature {slugArr[0]}</p>

{ :else if slugArr.length > 1 }

    <p>Viewing docs for feature:</p>
    {#each slugArr as feat }
        <p>{ feat }</p>
    {/each}

{/if}

