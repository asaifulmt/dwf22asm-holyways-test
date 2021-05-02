import {Col, Container, Row } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import Card from "../components/card"

const RaiseFundPage = () => {
  const router = useHistory()
  const goToViewFund = () => {
    router.push(`/raise-fund/1`);
  }
  const goToFormRaiseFund = () => {
    router.push('/form-raise-fund')
  }
  return (
    <Container style={{ marginTop: '79px'}}>
      <div className="d-flex flex-row justify-content-between">
        <p className="detail-title">My Raise Fund</p>
        <button className="btn btn-card-donate" onClick={goToFormRaiseFund}>Make Raise Fund</button>
      </div>
      <Row>
          <Col md={4}>
            <Card
              img="/fund.jpg"
              title="The Strength of a People. Power of Community"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              progress={35}
              nominal="Rp. 25.000.000"
              buttonName="View Fund"
              buttonOnClick={goToViewFund}
            />
          </Col>
          <Col>
            <Card
              img="/fund2.jpg"
              title="Empowering Communities Ending Poverty"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              progress={50}
              nominal="Rp. 50.000.000"
              buttonName="View Fund"
              buttonOnClick={goToViewFund}
            />
          </Col>
          <Col>
            <Card
              img="/fund3.jpg"
              title="Please our brothers in flores"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              progress={75}
              nominal="Rp. 100.000.000"
              buttonName="View Fund"
              buttonOnClick={goToViewFund}
            />
          </Col>
        </Row>
    </Container>
  )
}

export default RaiseFundPage
