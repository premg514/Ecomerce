import { useEffect, useState } from "react"
import Item from './Item'
import basicOps from "./utilitiz/basicOps"
import { usePaginationContext } from "../contexts/PaginationContext"
import '../index.css'

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Products() {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [order, setOrder] = useState(0)
    const [category, setCategory] = useState("All Details")
    const [categoryData, setCategoryData] = useState([])
    const { pageNumber,
        setPageNum,
        pageSize,
        setPageSize } = usePaginationContext()
    useEffect(() => {
        (async () => {
            const request = await fetch("https://fakestoreapi.com/products")
            const response = await request.json()
            //console.log(response)
            setData(response)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            const request = await fetch("https://fakestoreapi.com/products/categories")
            const response = await request.json()
            setCategoryData(response)
        })()
    }, [])


    const handleInput = (e) => {
        setSearchTerm(e.target.value)
    }

    let listData = basicOps(data, searchTerm, order, category, categoryData)



    const sidx = (pageNumber - 1) * pageSize
    const eidx = sidx + pageSize
    const resultList = listData.slice(sidx, eidx)
    const totalPages = Math.ceil(listData.length / pageSize)
    console.log(totalPages)
    return (
        <div className="products-page" >

            {
                resultList === null ? <h1>Loading...</h1> : (
                    <div>
                        <input value={searchTerm} type="search" onChange={handleInput} placeholder="Search..." />
                        <button onClick={() => { setOrder(1) }} >Up</button>
                        <button onClick={() => { setOrder(-1) }}>Down</button>
                        <div>
                            <button onClick={() => { setCategory("All Details") }} >All Details</button>
                            {categoryData.map(each => (
                                <button onClick={() => setCategory(each)}>{each}</button>
                            ))}
                        </div>
                        <ul className="products-list" >
                            {
                                resultList.map(each => (
                                    <Item key={each.id} item={each} />
                                ))
                            }
                        </ul>
                        <div className="pagination" >
                            <button className="paginationBtn" disabled={pageNumber == 1 ? true : false} onClick={() => setPageNum(pageNumber => pageNumber - 1)}  ><FaArrowCircleLeft /></button>
                            <h5>{pageNumber}</h5>
                            <button className="paginationBtn" disabled={totalPages == pageNumber ? true : false} onClick={() => setPageNum(pageNumber => pageNumber + 1)} ><FaArrowAltCircleRight /></button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Products