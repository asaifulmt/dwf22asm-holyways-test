import { useEffect, useState } from "react"
import {Col, Container, Row } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import Card from "../components/card"
import { API } from "../config/api"
import { convertToRupiah, getProgress } from "../utils/helper"

const RaiseFundPage = () => {
  const [funds, setFunds] = useState([])
  const router = useHistory()
  const goToViewFund = (fundId) => {
    router.push(`/raise-fund/${fundId}`);
  }
  const goToFormRaiseFund = () => {
    router.push('/form-raise-fund')
  }

  useEffect(() => {
    const getMyRaiseFunds = async () => {
      const resp = await API.get('/my-funds')
      setFunds(resp.data.funds)
    }

    getMyRaiseFunds()
  }, [])

  return (
    <Container style={{ marginTop: '79px'}}>
      <div className="d-flex flex-row justify-content-between">
        <p className="detail-title">My Raise Fund</p>
        <button className="btn btn-card-donate" onClick={goToFormRaiseFund}>Make Raise Fund</button>
      </div>
      <Row>
        {
          funds.map(fund => {
            return (
              <Col md={4} className="mt-3" key={fund.id}>
                <Card
                  img={`http://localhost:5000/uploads/${fund.thumbnail}`}
                  title={fund.title}
                  text={fund.description}
                  progress={getProgress(fund.usersDonate, fund.goal)}
                  nominal={convertToRupiah(fund.goal)}
                  buttonName="View Fund"
                  buttonOnClick={() => goToViewFund(fund.id)}
                />
              </Col>
            )
          })
        }
          
          {/* <Col>
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
          </Col> */}
        </Row>
    </Container>
  )
}

export default RaiseFundPage
