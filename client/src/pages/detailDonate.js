import { useEffect, useState } from "react"
import { Col, Container, Row, ProgressBar, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ModalDonate from "../components/modalDonate"
import { API } from "../config/api"
import { convertToRupiah, getProgress, getTotal } from "../utils/helper"
import NotFound from "./notFound"

const DetailDonate = () => {
  const [isError, setIsError] = useState(false)
  const [fund, setFund] = useState({})
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const { id } = useParams()

  const getFund = async () => {
    try {
      const resp = await API.get(`/fund/${id}`)
      if(resp.data.fund) {
        setFund(resp.data.fund)
      }
    } catch(err) {
      setIsError(true)
    }
  }

  useEffect(() => {
    getFund()
  })

  if (isError) {
    return <NotFound />
  }

  if (!fund.title) {
    return <div></div>
  }

  const userDonateSuccess = fund.usersDonate.filter(user => user.status === 'success')

  return (
    <>
      <Container style={{ marginTop: '79px'}}>
        <Row>
          <Col md={5}>
            <img className="image-detail-donate" src={`http://localhost:5000/uploads/${fund.thumbnail}`} alt="img-detail" />
          </Col>
          <Col md={{ span: 5, offset: 2 }}>
            <div className="detail-title">
              {fund.title}
            </div>
            <div className="detail-donate-container">
              <div className="raised-fund-text-container">
                <p className="gathered-text primary-color">{convertToRupiah(getTotal(fund.usersDonate))}</p>
                gathered from
                <p className="gathered-text">{convertToRupiah(fund.goal)}</p>
              </div>
              <ProgressBar className="mt-2" now={getProgress(fund.usersDonate, fund.goal)} />
              <div className="d-flex justify-content-between mt-2">
                <p><b className="gathered-text">{userDonateSuccess.length}</b> Donation</p>
                <p><b className="gathered-text">150</b> More Day</p>
              </div>
              <div className="desc-detail-text mt-3 mb-5">
                {fund.description}
              </div>
              <button className="btn-fullwidth btn-donate" onClick={() => setIsVisibleModal(true)}>Donate</button>
            </div>
          </Col>
        </Row>
        <div className="detail-title mt-5">
          List Donation ({userDonateSuccess.length})
        </div>
        <div className="mt-4">
          {
            userDonateSuccess.map(({ id, fullName, donatedAt, donateAmount }) => (
              <Card className="mb-3" key={id}>
                <Card.Body>
                  <p><b>{fullName}</b></p>
                  <p>{new Date(donatedAt).toDateString()}</p>
                  <p className="primary-color">Total: {convertToRupiah(donateAmount)}</p>
                </Card.Body>
              </Card>
            ))
          }
        </div>
      </Container>
      <ModalDonate isVisible={isVisibleModal} onHide={() => setIsVisibleModal(false)} />
    </>
  )
}

export default DetailDonate
