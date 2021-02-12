export function createPaginationFromMagicGatheringResponse (response) {
    return {
        total: response['total-count'],
        pageSize: response['page-size']
    }
}