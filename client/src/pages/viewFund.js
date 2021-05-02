import { useState } from "react"
import { Col, Container, Row, ProgressBar, Card } from "react-bootstrap"
import ModalApprove from "../components/modalApprove"
import ModalDonate from "../components/modalDonate"

const fakeData = [
  {
    id: 1,
    name: 'Andi',
    date: '2021-04-11T17:00:00.000Z',
    total: '45000'
  },
  {
    id: 2,
    name: 'Jamal',
    date: '2021-04-11T17:00:00.000Z',
    total: '45000'
  },
  {
    id: 3,
    name: 'Udin',
    date: '2021-04-11T17:00:00.000Z',
    total: '45000'
  }
]

const fakeDataUnApproved = [
  {
    id: 1,
    name: 'Fadhil',
    date: '2021-04-11T17:00:00.000Z',
    total: '45000'
  },
  {
    id: 2,
    name: 'Radhif',
    date: '2021-04-11T17:00:00.000Z',
    total: '45000'
  },
  {
    id: 3,
    name: 'Egi',
    date: '2021-04-11T17:00:00.000Z',
    total: '45000'
  }
]

const ViewFund = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [isVisibleModalApprove, setIsVisibleModalApprove] = useState(false)
  const [selectedViewApprove, setSelectedViewApprove] = useState({})

  const viewModalApprove = data => {
    setSelectedViewApprove({ ...selectedViewApprove, ...data })
    setIsVisibleModalApprove(true)
  }

  return (
    <>
      <Container style={{ marginTop: '79px'}}>
        <Row>
          <Col md={5}>
            <img className="image-detail-donate" src="/fund.jpg" alt="img-detail" />
          </Col>
          <Col md={{ span: 5, offset: 2 }}>
            <div className="detail-title">
              The Strength of a People. Power of Community
            </div>
            <div className="detail-donate-container">
              <div className="raised-fund-text-container">
                <p className="gathered-text primary-color">Rp.25.000.000</p>
                gathered from
                <p className="gathered-text">Rp.200.000.000</p>
              </div>
              <ProgressBar className="mt-2" now={30} />
              <div className="d-flex justify-content-between mt-2">
                <p><b className="gathered-text">200</b> Donation</p>
                <p><b className="gathered-text">150</b> More Day</p>
              </div>
              <div className="desc-detail-text mt-3 mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </div>
              <button className="btn-fullwidth btn-donate" onClick={() => setIsVisibleModal(true)}>Donate</button>
            </div>
          </Col>
        </Row>
        <div className="detail-title mt-5">
          List Donation (200)
        </div>
        <div className="mt-4">
          {
            fakeData.map(({ id, name, date, total }) => (
              <Card className="mb-3" key={id}>
                <Card.Body>
                  <p><b>{name}</b></p>
                  <p>{new Date(date).toDateString()}</p>
                  <p className="primary-color">Total: Rp.{total}</p>
                </Card.Body>
              </Card>
            ))
          }
        </div>
        <div className="detail-title mt-5">
          Donation has not been approved (10)
        </div>
        <div className="mt-4">
          {
            fakeDataUnApproved.map(({ id, name, date, total }) => (
              <Card className="mb-3" key={id}>
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <p><b>{name}</b></p>
                    <p>{new Date(date).toDateString()}</p>
                    <p className="primary-color">Total: Rp.{total}</p>
                  </div>
                  <div className="mr-4">
                  <button className="btn btn-card-donate" onClick={() => viewModalApprove({ id, name, date, total })}>View</button>
                  </div>
                </Card.Body>
              </Card>
            ))
          }
        </div>
      </Container>
      <ModalDonate isVisible={isVisibleModal} onHide={() => setIsVisibleModal(false)} />
      <ModalApprove isVisible={isVisibleModalApprove} onHide={() => setIsVisibleModalApprove(false)} data={selectedViewApprove} />
    </>
  )
}

export default ViewFund
