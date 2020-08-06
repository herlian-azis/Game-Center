import React, { } from 'react'
import { Pagination } from 'react-bootstrap'


const pages = ({ onPages, currentPage }) => {

    return (
        <>
            <Pagination className='justify-content-center'>
                <Pagination.Prev disabled={currentPage === 1} onClick={() => onPages(currentPage - 1)} />
                {"1".repeat(10).split("").map((page, i) => {
                    return <Pagination.Item onClick={() => onPages(1 + i)} key={i} active={currentPage === i + 1} >{i + 1} </Pagination.Item>
                })}
                <Pagination.Next disabled={currentPage === 10} onClick={() => onPages(currentPage + 1)} />
            </Pagination>
        </>
    )

}

export default pages

