import { Form, Modal } from "react-bootstrap"

const ModalApprove = ({ isVisible, onHide, data }) => {
  const handleApprove = e => {
    e.preventDefault()
  }

  return (
    <Modal centered show={isVisible} onHide={onHide}>
      <Modal.Body className="container-modal">
        <Form className="d-flex flex-column">
          <div className="mb-3"><b>{data.name}</b></div>
          <Form.Group controlId="formBasicNominal">
            <Form.Control value={data.total} type="number" disabled />
          </Form.Group>
          <img src="/resi.jpg" alt="proof" className="mb-3" />
          <button className="btn-fullwidth btn-donate" onClick={e => handleApprove(e)}>Approve</button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalApprove
