<script>
    export let data
    const featuredProducts = data.featuredProducts
    const username = data.username
</script>

<slot/>
<h2>Featured products for { username }</h2>
<!--sample list of grocery products-->
<ul>
    {#each featuredProducts as product}
    <li> {product.title} </li>
    {/each}
    
</ul>

<style>
    li {
        display: inline-block;
        padding: 10px;
        margin: 10px;
        border: 1px solid chocolate;
        border-radius: 5px;
        color: chocolate;
    }
</style>