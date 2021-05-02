import { Container, Col, Row, Card } from "react-bootstrap"

const fakeData = [
  {
    title: 'The Strength of a People. Power of Community',
    date: '2021-04-11T17:00:00.000Z',
    total: '45000'
  }
]
const ProfilePage = () => {
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
                <p>Andi</p>
              </div>
              <div>
                <p className="primary-color mb-0">Email</p>
                <p>andigans@gmail.com</p>
              </div>
              <div>
                <p className="primary-color mb-0">Phone</p>
                <p>083896833122</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col>
          <p className="detail-title">History Donation</p>
          {
          fakeData.map(({title, date, total}) => (
          <Card>
            <Card.Body>
              <p><b>{title}</b></p>
              <p>{new Date(date).toDateString()}</p>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <p className="primary-color mb-0">Total: Rp.{total}</p>
                <div className="alert-container">
                  <p className="alert-text">Finished</p>
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
