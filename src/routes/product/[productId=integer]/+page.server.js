import { error } from '@sveltejs/kit'
//Server Load Function
export const load =  async (loadServerEvent) => {
    const { fetch, params } = loadServerEvent
    const { productId } = params
    if (productId > 10 ){
        throw error(404, {
            message: 'Oh no! The product you are looking for does not exist.',
            hint: 'Try searching for a different product or go back to the home page.'
        })
    }
    const title = "Product Details"
    const response = await fetch(`http://localhost:4000/products/${productId}`)
    const product = await response.json()

    return {
        title, product
    }
}