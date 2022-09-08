const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
    let page
    const isNullUndefined = check => (check === null || check === undefined)
    if (isNullUndefined(rowsPerPage) || rowsPerPage === 0) page = 1
    else page = isNullUndefined(arrayItems) ? undefined : Math.ceil(arrayItems.length / rowsPerPage)
    return page
}
module.exports = totalPages
