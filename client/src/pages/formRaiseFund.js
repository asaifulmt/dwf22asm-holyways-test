import { useState } from "react"
import { Container, Form } from "react-bootstrap"

const FormRaiseFundPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    goals: '',
    Description: ''
  })

  const onChange = e => {
    setFormData ({...formData, [e.target.name]: e.target.value })
  }

  const handleDonate = e => {
    e.preventDefault()
  }

  return (
    <Container style={{ marginTop: '79px'}}>
      <p className="detail-title">
        Make Raise Fund
      </p>
      <Form style={{marginTop: '71px'}}>
        <Form.Group controlId="formBasicTitle">
          <Form.Control className="form-input" name="Title" onChange={e => onChange(e)} type="text" placeholder="Title" />
        </Form.Group>
          <div className="btn btn-attachment cursor-pointer mb-3">
            Attach Thumbnail
          </div>
        <Form.Group controlId="formBasicGoalsDonation">
          <Form.Control className="form-input" name="Goals" onChange={e => onChange(e)} type="number" placeholder="Goals Donation" />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Control className="form-input" name="Description" onChange={e => onChange(e)} as="textarea" rows={6} placeholder="Description" />
        </Form.Group >
            <div className="d-flex flex-row-reverse">
              <button className="btn-form btn-form-text" style={{ marginTop: '83px'}} onClick={e => handleDonate(e)}>Public Fundraising</button>
            </div>
      </Form>
    </Container>
  )
}


export default FormRaiseFundPage
