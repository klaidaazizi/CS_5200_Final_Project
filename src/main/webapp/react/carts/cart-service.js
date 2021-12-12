const CARTS_URL = "http://localhost:8080/api/carts"

export const findAllCarts= () =>
    fetch(CARTS_URL)
        .then(response => response.json())

export const findCartById = (id) =>
    fetch(`${CARTS_URL}/${id}`)
        .then(response => response.json())

export const findCartsByCustomer = (id) =>
    fetch(`${CARTS_URL}/customerId/${id}`)
        .then(response => response.json())

export const deleteCart = (id) =>
    fetch(`${CARTS_URL}/${id}`, {
        method: "DELETE"
    })

export const createCart = (cart) =>
    fetch(CARTS_URL, {
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateCart = (id, cart) =>
    fetch(`${CARTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(cart),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllCarts,
    findCartById,
    deleteCart,
    createCart,
    updateCart,
    findCartsByCustomer
}
