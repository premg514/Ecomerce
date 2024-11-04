import React from "react";
import { useState, useContext } from "react";

const PaginationContext = React.createContext()

export default function PaginationProvider({ children }) {
    const [pageNumber, setPageNum] = useState(1)
    const [pageSize, setPageSize] = useState(6)
    const paginationProps = {
        pageNumber,
        setPageNum,
        pageSize,
        setPageSize
    }
    return <PaginationContext.Provider value={paginationProps}  >
        {children}
    </PaginationContext.Provider>
}

export const usePaginationContext = () => {
    return useContext(PaginationContext)
}