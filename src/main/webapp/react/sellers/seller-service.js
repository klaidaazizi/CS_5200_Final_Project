const SELLERS_URL = "http://localhost:8080/api/sellers"

export const findAllSellers= () =>
    fetch(SELLERS_URL)
        .then(response => response.json())

export const findSellerById = (id) =>
    fetch(`${SELLERS_URL}/${id}`)
        .then(response => response.json())

export const findSellerByProductId = (id) =>
    fetch(`${SELLERS_URL}/productId/${id}`)
        .then(response => response.json())

export const deleteSeller = (id) =>
    fetch(`${SELLERS_URL}/${id}`, {
        method: "DELETE"
    })

export const createSeller = (seller) =>
    fetch(SELLERS_URL, {
        method: 'POST',
        body: JSON.stringify(seller),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateSeller = (id, seller) =>
    fetch(`${SELLERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(seller),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllSellers,
    findSellerById,
    deleteSeller,
    createSeller,
    updateSeller,
    findSellerByProductId
}
