
<script>
    let productId = 100
</script>

<!--home link-->
<h4><a href="/">Home</a></h4>
<h1>Product Page</h1>
<h3>Product List</h3>
<ul>
  <li><a href="/product/1">Product 1</a></li>
  <li><a href="/product/2">Product 2</a></li>
  <li><a href={`/product/${productId}`}>Product {productId}</a></li>
</ul>