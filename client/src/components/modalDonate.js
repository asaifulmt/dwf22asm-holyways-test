import {useState} from "react"
import { Form, Modal } from "react-bootstrap"

const ModalDonate = ({ isVisible, onHide }) => {
  const [formData, setFormData] = useState({
    nominal: ''
  })

  const onChange = e => {
    setFormData ({...formData, [e.target.name]: e.target.value })
  }

  const handleDonate = e => {
    e.preventDefault()
  }

  return (
    <Modal centered show={isVisible} onHide={onHide}>
      <Modal.Body className="container-modal">
        <Form>
          <Form.Group controlId="formBasicNominal">
            <Form.Control name="Nominal Donation" onChange={e => onChange(e)} type="number" placeholder="Nominal" />
          </Form.Group>
          <div className="btn btn-attachment cursor-pointer mb-3">
            Attach payment
            <img src="/attachment.svg" alt="attachment" />
          </div>
          <button className="btn-fullwidth btn-donate" onClick={e => handleDonate(e)}>Donate</button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalDonate
