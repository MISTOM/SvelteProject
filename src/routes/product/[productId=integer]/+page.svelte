<script>
    import { page } from '$app/stores'
    const productId = $page.params.productId
</script>

<h1>Details About product of the id:</h1>
<pre>Product id: {productId}</pre>
Check the review here:
<a href="/product/{productId}/review/{productId+"review1"}">Review</a>
