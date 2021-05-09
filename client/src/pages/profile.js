import { useEffect, useState } from "react"
import { Container, Col, Row, Card } from "react-bootstrap"
import jwt from 'jsonwebtoken'
import { API } from "../config/api"
import { convertToRupiah } from "../utils/helper"

const ProfilePage = () => {
  const [profile, setProfile] = useState({})
  const [donations, setDonations] = useState([])

  useEffect(() => {
    const { email, fullName } = jwt.decode(localStorage.getItem('token'))
    setProfile({ email, fullName })

    async function getMyDonations() {
      try {
        const resp = await API.get('/donates')
        setDonations(resp.data.userDonates)
      } catch(err) {
        console.log(err)
      }
    }

    getMyDonations()
  }, [])

  return (
    <Container style={{ marginTop: '79px'}}>
      <Row>
        <Col>
          <p className="detail-title">My Profile</p>
          <Row>
            <Col md="5">
              <img src="profile-page.svg" alt="profile" style={{ borderRadius: '4px' }} />
            </Col>
            <Col className="d-flex flex-column justify-content-between">
              <div>
                <p className="primary-color mb-0">Fullname</p>
                <p>{profile.fullName}</p>
              </div>
              <div>
                <p className="primary-color mb-0">Email</p>
                <p>{profile.email}</p>
              </div>
              <div>
                <p className="primary-color mb-0">Phone</p>
                <p>-</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col>
          <p className="detail-title">History Donation</p>
          {
          donations.map(({ id, fund, createdAt, donateAmount, status }, idx) => (
          <Card key={idx}>
            <Card.Body>
              <p><b>{fund.title}</b></p>
              <p>{new Date(createdAt).toDateString()}</p>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <p className="primary-color mb-0">Total: {convertToRupiah(donateAmount)}</p>
                <div className="alert-container">
                  <p className="alert-text">{status === 'success' ? 'Finished' : 'Pending'}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
            ))
          }
        </Col>
      </Row>
    </Container>
    )
}

export default ProfilePage
