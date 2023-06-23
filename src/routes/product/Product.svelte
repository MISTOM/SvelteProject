<script>
    export let product
</script>
<li>
    <a href={`/product/${product.id}`}>
        <p>{ product.title }</p>
        <p>{ product.description }</p>
    </a>
</li>
<hr/>