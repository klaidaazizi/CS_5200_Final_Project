const PRODUCTS_URL = "http://localhost:8080/api/products"

export const findAllProducts = () =>
    fetch(PRODUCTS_URL)
        .then(response => response.json())

export const findProductById = (id) =>
    fetch(`${PRODUCTS_URL}/${id}`)
        .then(response => response.json())

export const findProductsBySeller = (id) =>
    fetch(`${PRODUCTS_URL}/sellerId/${id}`)
        .then(response => response.json())

export const findProductByOrderId = (id) =>
    fetch(`${PRODUCTS_URL}/orderId/${id}`)
        .then(response => response.json())

export const findProductByDiscountId = (id) =>
    fetch(`${PRODUCTS_URL}/discountId/${id}`)
        .then(response => response.json())

export const deleteProduct = (id) =>
    fetch(`${PRODUCTS_URL}/${id}`, {
        method: "DELETE"
    })

export const createProduct = (product, id) =>
    fetch(`${PRODUCTS_URL}/${id}`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateProduct = (id, product) =>
    fetch(`${PRODUCTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllProducts,
    findProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    findProductsBySeller,
    findProductByOrderId,
    findProductByDiscountId
}
