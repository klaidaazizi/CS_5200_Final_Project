const ORDERS_URL = "http://localhost:8080/api/orders"

export const findAllOrders= () =>
    fetch(ORDERS_URL)
        .then(response => response.json())

export const findOrderById = (id) =>
    fetch(`${ORDERS_URL}/${id}`)
        .then(response => response.json())

export const findOrdersByProduct = (id) =>
    fetch(`${ORDERS_URL}/productId/${id}`)
        .then(response => response.json())

export const findOrdersByCart = (id) =>
    fetch(`${ORDERS_URL}/cartId/${id}`)
        .then(response => response.json())

export const deleteOrder = (id) =>
    fetch(`${ORDERS_URL}/${id}`, {
        method: "DELETE"
    })

export const addOrder = (productId, cartId, quantity) =>
    fetch(`${ORDERS_URL}/${productId}/${cartId}/${quantity}`, {
        method: 'POST'
    }).then(response => response.json())

export const createOrder = (order) =>
    fetch(ORDERS_URL, {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateOrder = (id, order) =>
    fetch(`${ORDERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(order),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllOrders,
    findOrderById,
    deleteOrder,
    createOrder,
    updateOrder,
    findOrdersByProduct,
    addOrder,
    findOrdersByCart
}
