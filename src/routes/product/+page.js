//Universal Load function
import Product from "./Product.svelte";

export const load =  async (loadEvent) => {
    console.log("Load function called in products page.js")
    const { data } = loadEvent
    return {
        ...data,
        Component: Product
    }
}