const CUSTOMER_URL = "http://localhost:8080/api/customers"

export const findAllCustomers= () =>
    fetch(CUSTOMER_URL)
        .then(response => response.json())

export const findCustomerById = (id) =>
    fetch(`${CUSTOMER_URL}/${id}`)
        .then(response => response.json())

export const deleteCustomer = (id) =>
    fetch(`${CUSTOMER_URL}/${id}`, {
        method: "DELETE"
    })

export const createCustomer = (customer) =>
    fetch(CUSTOMER_URL, {
        method: 'POST',
        body: JSON.stringify(customer),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateCustomer = (id, customer) =>
    fetch(`${CUSTOMER_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(customer),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllCustomers,
    findCustomerById,
    deleteCustomer,
    createCustomer,
    updateCustomer
}
