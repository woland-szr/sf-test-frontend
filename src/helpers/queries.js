async function putUserData(data) {
    // eslint-disable-next-line
    const response = await fetch("/" + data._id,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

async function getUserData(initialData) {
    // eslint-disable-next-line
    const response = await fetch("/" + initialData._id,{method: 'GET'})
}

export { putUserData, getUserData }