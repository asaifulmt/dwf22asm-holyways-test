import { useState } from "react"
import { Alert, Form, Modal } from "react-bootstrap"
import { API } from "../config/api"

const ModalApprove = ({ isVisible, onHide, getFund, data }) => {
  const [status, setStatus] = useState({})
  const handleApprove = async (e) => {
    try {
      e.preventDefault()
      await API.patch(`/fund/${data.fundId}/${data.userId}`, { status: 'success' })
      
      setStatus({
        message: 'Data approved successfully',
        error: false
      })

      setTimeout(() => {
        onHide()
        getFund()
        setStatus({})
      }, 1500)
      
     
    } catch (err) {
      console.log(err)
      setStatus({
        message: 'Something went wrong with the server, please try again later',
        error: true
      })
    }
  }

  return (
    <Modal centered show={isVisible} onHide={onHide}>
      <Modal.Body className="container-modal">
        {
          status.message && <Alert variant={status.error ? 'danger' : 'primary'}>{status.message}</Alert>
        }
        <Form className="d-flex flex-column">
          <div className="mb-3"><b>{data.name}</b></div>
          <Form.Group controlId="formBasicNominal">
            <Form.Control value={data.total} type="number" disabled />
          </Form.Group>
          <img src={`http://localhost:5000/uploads/${data.proofAttachment}`} alt="proof" className="mb-3" />
          <button className="btn-fullwidth btn-donate" onClick={handleApprove}>Approve</button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalApprove
