//Server Load Function
export const load =  async (loadServerEvent) => {
    console.log("Load function called in products server")
    const { fetch } = loadServerEvent
    const title = "List of Available Products";
    const response = await fetch("http://localhost:4000/products/");
    const products = await response.json()

    return {
        title, products
    }
}