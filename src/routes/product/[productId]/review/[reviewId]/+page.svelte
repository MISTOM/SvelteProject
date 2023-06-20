<script>
    import { page } from '$app/stores'
    const { productId, reviewId } = $page.params 
</script>

<h1>This product of ID: { productId } has reviews of id { reviewId }</h1>