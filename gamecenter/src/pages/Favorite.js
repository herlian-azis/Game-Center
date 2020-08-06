import React from 'react'
import { useSelector } from "react-redux"
import Card from '../components/Card'
import { Row, Container, Col } from 'react-bootstrap'


const FavoriteList = () => {
    const { favorites } = useSelector(state => state)
    console.log(favorites)
    if (!favorites) {
        return (
            <p>LODIINGGGGG</p>
        )
    }
    return (
        <>
            <Container>
                <Row style={{
                    marginRight: -186 + 'px',
                    marginLeft: -127 + 'px'
                }}>
                    {favorites.map((fav, i) => {
                        return (
                            <Col key={i} md={3} className='mb-5'>
                                <Card game={fav} key={i} />
                            </Col>)

                    })}
                </Row>
            </Container>
        </>
    )
}
export default FavoriteList
