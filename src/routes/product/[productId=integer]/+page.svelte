<script>
    import { invalidate } from '$app/navigation'
    import { page } from '$app/stores'
    const productId = $page.params.productId
    export let data
    const title = data.title
    const product = data.product


  function refresh (){
    console.log('button clicked');
    invalidate("product: detail")

  }


</script>

<table>
    <tr>
        <td>{ title }</td>
    </tr>
    <tr>
        <td>{ product.title }</td>
    </tr>
    <tr>
        <td>{ product.description }</td>
    </tr>
    <tr>
        <td>{ product.price }</td>
    </tr>


</table>
<button on:click={refresh}>Refresh</button>

<style>
    table, td {
        border: 1px solid black;
    }

</style>
