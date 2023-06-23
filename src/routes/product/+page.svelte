
<script>
  export let data;

  const title = data.title;
  const products = data.products;
  const Component = data.Component;
</script>

<!--home link-->
<h4><a href="/">Home</a></h4>
<h1>Product Page</h1>
<h3>{ title }</h3>

<ul>
  {#each products as product}

    <Component { product }/>

  {/each}
</ul>