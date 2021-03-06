import React from 'react'
import { Modal } from 'react-bootstrap'
import stylee from './Modal.module.css'

const ModalVideo = (props) => {
    console.log(props.clip)
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div className={stylee['modal-video']}>
                    <Modal.Body style={{ padding: 0, backgroundColor: 'transparent' }}>
                        <video width='100%' controls autoPlay loop>
                            <source src={props.clip} type='video/mp4'></source>
                        </video>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    )
}

export default ModalVideo