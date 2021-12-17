const DISCOUNTS_URL = "http://localhost:8080/api/discounts"

export const findAllDiscounts= () =>
    fetch(DISCOUNTS_URL)
        .then(response => response.json())

export const findDiscountById = (id) =>
    fetch(`${DISCOUNTS_URL}/${id}`)
        .then(response => response.json())

export const findDiscountByProduct = (id) =>
    fetch(`${DISCOUNTS_URL}/productId/${id}`)
        .then(response => response.json())

export const deleteDiscount = (id) =>
    fetch(`${DISCOUNTS_URL}/${id}`, {
        method: "DELETE"
    })
export const addDiscount = (discount, id) =>
    fetch(`${DISCOUNTS_URL}/${id}`, {
        method: 'POST',
        body: JSON.stringify(discount),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const createDiscount = (discount) =>
    fetch(DISCOUNTS_URL, {
        method: 'POST',
        body: JSON.stringify(discount),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateDiscount = (id, discount) =>
    fetch(`${DISCOUNTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(discount),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllDiscounts,
    findDiscountById,
    deleteDiscount,
    createDiscount,
    updateDiscount,
    findDiscountByProduct,
    addDiscount
}
