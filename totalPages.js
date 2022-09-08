const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
    return !arrayItems ? undefined : 
           (!rowsPerPage || rowsPerPage === 0 ? 
           1 : Math.ceil(arrayItems.length / rowsPerPage))
}
module.exports = totalPages
