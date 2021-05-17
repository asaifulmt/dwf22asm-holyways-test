// import { useContext, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"

import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Navbar from "./components/navbar";
import ModalLogin from "./components/modalLogin";
import ModalRegister from "./components/modalRegister";
// import { UserContext } from "./contexts/userContext";
import PrivateRoute from "./components/privateRoute";
import DetailDonate from "./pages/detailDonate";
import ProfilePage from "./pages/profile";
import RaiseFundPage from "./pages/raiseFund";
import FormRaiseFundPage from "./pages/formRaiseFund";
import EditFormRaiseFundPage from './pages/editFormFund'
import ViewFund from "./pages/viewFund";
// import { setAuthToken } from "./config/api";

function App() {
  // const [, dispatch] = useContext(UserContext);

  // useMemo(() => {
  //   const token = localStorage.getItem('token')
  
  //   if (token) {
  //     setAuthToken(token)
  //     dispatch({
  //       type: 'LOGIN'
  //     })
  //   }
  // }, [dispatch])

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute
          exact
          path="/donate/:id"
          component={DetailDonate}
        />
        <PrivateRoute
          exact
          path="/profile"
          component={ProfilePage}
        />

        <PrivateRoute
          exact
          path="/raise-fund"
          component={RaiseFundPage}  
        />

        <PrivateRoute
          exact
          path="/raise-fund/:id"
          component={ViewFund}  
        />

        <PrivateRoute
          exact
          path="/form-raise-fund"
          component={FormRaiseFundPage}  
        />

        <PrivateRoute
          exact
          path="/edit-raise-fund/:id"
          component={EditFormRaiseFundPage}  
        />

        <Route component={NotFound} />
      </Switch>
      <ModalLogin />
      <ModalRegister />
    </Router>
  )
}

export default App;
