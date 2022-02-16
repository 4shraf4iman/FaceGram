import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'

const Loading = ({show}) => {
    return (
        <Modal show={show} animation={false} centered>
            <div className="center-lock">
                <Spinner animation="border" role="status" style={{color: "white", textAlign: "center"}}/>
            </div>
        </Modal>
    )
}

export default Loading