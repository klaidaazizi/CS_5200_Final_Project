const FOLLOWS_URL = "http://localhost:8080/api/follows"

export const findAllFollows= () =>
    fetch(FOLLOWS_URL)
        .then(response => response.json())

// export const findFollowById = (id) =>
//     fetch(`${FOLLOWS_URL}/${id}`)
//         .then(response => response.json())

export const findFollowsByCustomerId = (id) =>
    fetch(`${FOLLOWS_URL}/${id}`)
        .then(response => response.json())
//
// export const findFollowsBySellerId = (id) =>
//     fetch(`${FOLLOWS_URL}/${id}`)
//         .then(response => response.json())
//
// export const deleteFollow = (id) =>
//     fetch(`${FOLLOWS_URL}/${id}`, {
//         method: "DELETE"
//     })
//
// export const createFollow = (sellerId, customerId, follow) =>
//     fetch(FOLLOWS_URL, {
//         method: 'POST',
//         body: JSON.stringify(follow),
//         headers: {'content-type': 'application/json'}
//     })
//         .then(response => response.json())
//
// export const updateFollow = (id, follow) =>
//     fetch(`${FOLLOWS_URL}/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify(follow),
//         headers: {'content-type': 'application/json'}
//     })
//         .then(response => response.json())

export default {
    findAllFollows,
    findFollowsByCustomerId
    // findFollowById,
    // findFollowsBySellerId,
    // deleteFollow,
    // createFollow,
    // updateFollow
}
