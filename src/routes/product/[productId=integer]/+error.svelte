<script>
    import { page } from '$app/stores'
</script>

<h1> { $page.error.message }</h1>
<span> { $page.error.hint }</span>
