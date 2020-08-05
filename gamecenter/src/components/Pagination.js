import React, { } from 'react'
import { Pagination } from 'react-bootstrap'


const pages = ({ onPages, currentPage }) => {

    // console.log(currentPage,'pagiee')
    // const item = () =>{
    //     const pagess=[]
    //     for (let i = 0; i < 5; i++) {
    //         pagess.push(
    //          <Pagination.Item onClick={()=> onPages(currentPage+i)} active={currentPage==i} >{ i+currentPage} </Pagination.Item>

    //         )

    //     }
    //     return pagess
    // }
    // console.log(item())

    return (
        <>
            <Pagination className='justify-content-center'>
                {/* <Pagination.First /> */}
                <Pagination.Prev disabled={currentPage === 1} onClick={() => onPages(currentPage - 1)} />
                {/* <Pagination.Item  >{currentPage}</Pagination.Item> */}
                {/* <Pagination.Ellipsis /> */}

                {"1".repeat(10).split("").map((page, i) => {

                    return <Pagination.Item onClick={() => onPages(1 + i)} active={currentPage === i + 1} >{i + 1} </Pagination.Item>

                })}

                {/* <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item >{14}</Pagination.Item> */}

                {/* <Pagination.Ellipsis /> */}
                {/* <Pagination.Item onClick={()=> onPages(19999)}>{20}</Pagination.Item> */}
                <Pagination.Next disabled={currentPage === 10} onClick={() => onPages(currentPage + 1)} />
                {/* <Pagination.Last /> */}
            </Pagination>
        </>
    )

}

export default pages

