<script>
    import { goto, beforeNavigate, afterNavigate } from '$app/navigation'
    let data = ["Looping", "Over", "Data"];
     const handleClick = () => {
        goto('/product')
     }

     beforeNavigate((navigation) =>{
        console.log('before navigate', navigation );
     })
     
     afterNavigate((navigation)=>{
        console.log('after navigate', navigation);
     })

</script>

<h4><a href="/blog">Blog</a></h4>
<h4><a href="/product">Product</a></h4>
<h4><a href="/docs">Docs</a></h4>

<h1>Welcome to the Home route</h1>
{#each data as item}
    <p>{item}</p>
{/each}


<button on:click={ handleClick }>Place Order</button>

