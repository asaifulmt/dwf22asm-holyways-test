import { useState, useRef } from "react"
import { Form, Modal, Alert } from "react-bootstrap"
import { API } from "../config/api"

const ModalDonate = ({ isVisible, onHide, getFund, fundId }) => {
  const [formData, setFormData] = useState({
    nominal: '',
    proofAttachment: null,
    img: null
  })

  const [status, setStatus] = useState({})

  const hiddenFileInput = useRef(null)

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'file' ? e.target.files : e.target.value,
      img: e.target.type === 'file' ? URL.createObjectURL(e.target.files[0]) : formData.img
    })
  }

  const handleDonate = async (e) => {
    try {
      e.preventDefault()

      const config = {
        headers: {
          "Content-type": "multipart/form-data"
        }
      }

      const form = new FormData()
      form.set('donateAmount', formData.nominal)
      form.append('proofAttachment', formData.proofAttachment[0], formData.proofAttachment[0].name)

      await API.post(`/donate/${fundId}`, form, config)

      setStatus({
        message: 'Thank you for your donation',
        error: false
      })

      setTimeout(() => {
        onHide()
        getFund()
        setStatus()
      }, 1500)
    } catch(err) {
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
        <Form>
          <Form.Group controlId="formBasicNominal">
            <Form.Control name="nominal" onChange={e => onChange(e)} type="number" placeholder="Nominal" />
          </Form.Group>
            <div className="btn btn-attachment cursor-pointer mb-3" onClick={() => hiddenFileInput.current.click()}>
              Attach payment
              <img src="/attachment.svg" alt="attachment" />
            </div>
            {
              formData.img && (
                <Form.Group>
                  <img src={formData.img} alt="attachment img" style={{ maxWidth: '100%' }} />
                </Form.Group>
              )
            }
          <Form.File>
            <Form.File.Input ref={hiddenFileInput} name="proofAttachment" onChange={e => onChange(e)} style={{ display: "none" }} />
          </Form.File>
          <button className="btn-fullwidth btn-donate" onClick={e => handleDonate(e)}>Donate</button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalDonate
