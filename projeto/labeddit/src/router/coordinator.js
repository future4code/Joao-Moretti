export const goToFeedPage = (history) => {
    history.push('/')
}

export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToDetailsPage = (history, id) => {
    history.push(`/details/${id}`)
}