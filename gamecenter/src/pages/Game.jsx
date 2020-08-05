import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Pagination from '../components/Pagination'
import Card from '../components/Card'
import useFetch from '../hooks/useFetch'
// import Detail from '../components/DetailCard'

export default () => {
    const [title] = useState('Game Center')
    const [currentPage, setCurrentPage] = useState(2)
    const [games] = useFetch(`https://api.rawg.io/api/games?page=${currentPage}`)


    // console.log(games.length, 'length')
    // console.log(currentDetail, 'urll');
    return (
        <div>
            <h1>{title}</h1>
            <Container>
                <Pagination
                    currentPage={currentPage}
                    onPages={page => setCurrentPage(page)} />
                <Row >
                    {games.map((game, i) => {
                        return (
                            <Col key={i} md={4} className='mb-5' sm={6} >
                                <Card  key={i} game={game} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
