import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap"
import { ModalContext } from "../contexts/modalContext";
import { UserContext } from "../contexts/userContext";

import Card from "../components/card"
import Hero from "../components/hero"
import { API } from "../config/api";
import { convertToRupiah, getProgress } from "../utils/helper";

const Home = () => {
  const [funds, setFunds] = useState([])
  const [{ isLogin }] = useContext(UserContext);
  const [, dispatchModal] = useContext(ModalContext);
  const router = useHistory()
  const goToDetailPage = (id) => {
    if (isLogin) {
      router.push(`/donate/${id}`);
    } else {
      dispatchModal({
        type: 'SHOW_LOGIN_MODAL'
      })
    }
  };

  useEffect(() => {
    const getFunds = async () => {
      const resp = await API.get('/funds')
      setFunds(resp.data.funds)
    }

    getFunds()
  }, [])

  return (
    <>
      <Hero />
      <div className="donate-text d-flex justify-content-center mt-5">Donate Now</div>
      <Container style={{ marginBottom: '57px' }}>
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
                    buttonName="Donate"
                    buttonOnClick={() => goToDetailPage(fund.id)}
                  />
                </Col>
              )
            })
          }
          {/* <Col>
            <Card
              img="/fund.jpg"
              title="The Strength of a People. Power of Community"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              progress={35}
              nominal="Rp. 25.000.000"
              buttonName="Donate"
              buttonOnClick={goToDetailPage}
            />
          </Col>
          <Col>
            <Card
              img="/fund2.jpg"
              title="Empowering Communities Ending Poverty"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              progress={50}
              nominal="Rp. 50.000.000"
              buttonName="Donate"
              buttonOnClick={goToDetailPage}
            />
          </Col>
          <Col>
            <Card
              img="/fund3.jpg"
              title="Please our brothers in flores"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              progress={75}
              nominal="Rp. 100.000.000"
              buttonName="Donate"
              buttonOnClick={goToDetailPage}
            />
          </Col> */}
        </Row>
      </Container>
    </>
  )
}

export default Home
