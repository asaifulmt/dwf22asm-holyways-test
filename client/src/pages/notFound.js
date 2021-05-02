import { useHistory } from "react-router-dom";

const NotFound = () => {
  const router = useHistory();

  const goToHomePage = () => {
    router.push('/');
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1>404 Not Found</h1>
      <button className="btn btn-card-donate" onClick={goToHomePage}>Back to Home</button>
    </div>
  );
};

export default NotFound;
