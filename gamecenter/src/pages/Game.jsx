import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Pagination from '../components/Pagination'
import Card from '../components/Card'
import useFetch from '../hooks/useFetch'
import Loading from './Loading/Loading'
export default () => {
    const [title] = useState('Game Center')
    const [currentPage, setCurrentPage] = useState(2)
    const [games, error, loading] = useFetch(`https://api.rawg.io/api/games?page=${currentPage}`)


    // console.log(games.length, 'length')
    // console.log(currentDetail, 'urll');
    if (loading) {
        return (<Loading/>)
    }
    return (
        <div>
            <h1>{title}</h1>
            <Container>
                <Pagination
                    currentPage={currentPage}
                    onPages={page => setCurrentPage(page)} />
                <Row style={{ marginRight: -186 + 'px', 
                            marginLeft: -127 + 'px'}} >
                    {games.map((game, i) => {
                        return (
                            <Col key={i} md={3} className='mb-5'   >
                                <Card key={i} game={game} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
