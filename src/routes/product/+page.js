export const load =  async (loadEvent) => {
    const { fetch } = loadEvent
    const title = "List of Available Products";
    const response = await fetch("http://localhost:4000/products/");
    const products = await response.json()

    return {
        title, products
    }
}