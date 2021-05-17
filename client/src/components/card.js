import { Card, ProgressBar } from "react-bootstrap"
import { PencilSquare } from 'react-bootstrap-icons'

const CardComponent = ({ img, title, text, progress, nominal, buttonName, buttonOnClick, btnEditOnClick = null }) => {
  return (
    <Card>
      <Card.Img width="330px" height="252px" src={img} />
      {
        btnEditOnClick &&
         <PencilSquare size={24} className="btn-edit" color="white" onClick={btnEditOnClick} />
      }
      <Card.Body>
        <Card.Title className="card-title cursor-pointer" onClick={buttonOnClick}>{title}</Card.Title>
        <Card.Text className="card-text">
          {text}
        </Card.Text>
        <ProgressBar now={progress} />
        <div className="footer-card">
          <div>{nominal}</div>
          <button className="btn btn-card-donate" onClick={buttonOnClick}>{buttonName}</button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
