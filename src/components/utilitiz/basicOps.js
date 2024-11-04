export default function basicOps(data, searchTerm, order, category,) {

    let filteredArr = data;
    if (searchTerm != "") {
        filteredArr = filteredArr.filter(each => {
            const filtering = each.title.toLowerCase().includes(searchTerm.toLowerCase())
            return filtering
        })

    }

    let filteredSortedArr = filteredArr;
    if (order != 0) {
        if (order == 1) {
            filteredSortedArr = filteredSortedArr.sort(incremantor)
        } else {
            filteredSortedArr = filteredSortedArr.sort(decremantor)
        }
    }

    let categoryList = filteredSortedArr;
    if (category != "All Details") {
        categoryList = categoryList.filter(each => {
            return each.category == category
        })

    }


    return categoryList
}


function incremantor(product1, product2) {
    if (product1.price > product2.price) {
        return 1
    } else {
        return -1
    }
}
function decremantor(product1, product2) {
    if (product1.price < product2.price) {
        return 1
    } else {
        return -1
    }
}