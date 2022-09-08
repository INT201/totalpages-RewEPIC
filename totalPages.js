const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
    return !arrayItems ? undefined : (!rowsPerPage ? 1 : Math.ceil(arrayItems.length / rowsPerPage))
}
module.exports = totalPages
