import { useEffect, useRef, useState } from "react"
import { Alert, Container, Form } from "react-bootstrap"
import { useHistory, useParams } from "react-router-dom"
import { API } from "../config/api"

const EditFormRaiseFundPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    thumbnail: null,
    goal: '',
    description: '',
    img: null
  })

  const router = useHistory()

  const [status, setStatus] = useState({})

  const hiddenFileInput = useRef(null)

  const { id } = useParams()

  useEffect(() => {
    const getFund = async () => {
      try {
        const resp = await API.get(`/fund/${id}`)
        if(resp.data.fund) {
          const { fund } = resp.data
          setFormData({
            ...formData,
            title: fund.title,
            goal: fund.goal,
            description: fund.description
          })
        }
      } catch(err) {
        setStatus({
          message: 'Error with server, please refresh',
          error: true
        })
      }
    }

    getFund()
  }, [])

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'file' ? e.target.files : e.target.value,
      img: e.target.type === 'file' ? URL.createObjectURL(e.target.files[0]) : formData.img
    })
  }

  const handleCreateFund = async (e) => {
    try {
      e.preventDefault()

      const config = {
        headers: {
          "Content-type": "multipart/form-data"
        },
        raw: true
      }

      const form = new FormData()
      form.set('title', formData.title)
      if (formData.thumbnail) form.append('thumbnail', formData.thumbnail[0], formData.thumbnail[0].name)
      form.set('goal', formData.goal)
      form.set('description', formData.description)

      const resp = await API.patch(`/fund/${id}`, form, config)

      setStatus({
        message: 'Your raise fund is successfully edited',
        error: false
      })

      setTimeout(() => {
        router.push(`/raise-fund/${resp.data.fund.id}`)
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
    <Container style={{ marginTop: '79px'}}>
      <p className="detail-title">
        Edit Raise Fund
      </p>
        {
          status.message && <Alert variant={status.error ? 'danger' : 'primary'}>{status.message}</Alert>
        }
      <Form style={{marginTop: '71px'}}>
        <Form.Group controlId="formBasicTitle">
          <Form.Control className="form-input" name="title" value={formData.title} onChange={e => onChange(e)} type="text" placeholder="Title" />
        </Form.Group>
          <div className="btn btn-attachment cursor-pointer mb-3" onClick={() => hiddenFileInput.current.click()}>
            Attach Thumbnail
          </div>
          {
            formData.img && (
              <Form.Group>
                <img src={formData.img} alt="attachment img" style={{ maxWidth: '100%' }} />
              </Form.Group>
            )
          }
        <Form.File>
          <Form.File.Input ref={hiddenFileInput} name="thumbnail" onChange={e => onChange(e)} style={{ display: "none" }} />
        </Form.File>
        <Form.Group controlId="formBasicGoalsDonation">
          <Form.Control className="form-input" name="goal" value={formData.goal} onChange={e => onChange(e)} type="number" placeholder="Goals Donation" />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Control className="form-input" name="description" value={formData.description} onChange={e => onChange(e)} as="textarea" rows={6} placeholder="Description" />
        </Form.Group >
            <div className="d-flex flex-row-reverse">
              <button className="btn-form btn-form-text" style={{ marginTop: '83px'}} onClick={e =>  handleCreateFund(e)}>Edit Fundraising</button>
            </div>
      </Form>
    </Container>
  )
}


export default EditFormRaiseFundPage
