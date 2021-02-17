export function createPaginationFromMagicGatheringResponse (response) {
    return {
        total: parseInt(response['total-count']),
        pageSize: parseInt(response['page-size'])
    }
}

export function createQueryParamFromObject (params) {
    let searchParams = new URLSearchParams()

    Object.keys(params).forEach((paramKey) => {
        if (params[paramKey]) {
            searchParams.append(paramKey, params[paramKey])
        }
    })
    return searchParams.toString()
}