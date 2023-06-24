import { error } from '@sveltejs/kit'
//Server Load Function
export const load =  async (loadServerEvent) => {
    const { fetch, params } = loadServerEvent
    const { productId } = params
    if (productId > 10 ){
        throw error(404,'Oh no! The product you are looking for does not exist.')
    }
    const title = "Product Details"
    const response = await fetch(`http://localhost:4000/products/${productId}`)
    const product = await response.json()

    return {
        title, product
    }
}