//Universal Load function
import Product from "./Product.svelte";

export const load =  async (loadEvent) => {
    console.log("Load function called in products page.js")
    const notification = "End of product sale"
    const { data } = loadEvent
    return {
        ...data, notification,
        Component: Product
    }
}