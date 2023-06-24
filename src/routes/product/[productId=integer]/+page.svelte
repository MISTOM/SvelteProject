<script>
    export let data
    const title = data.title
    const product = data.product
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

<style>
    table, td {
        border: 1px solid black;
    }

</style>
