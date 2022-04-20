import React from "react";
import "./Homepage.scss";
import { useAuth0 } from "@auth0/auth0-react";
// import {useNavigate} from 'react-router-dom'

function HomePage() {
  // const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  //  const { isAuthenticated , user , isLoading } = useAuth0();
  //  if(isAuthenticated && user && !isLoading ){
  //    navigate('/todo')
  //  }

  return (
    <div className="containerr">
      <div>
        <div>
          <h1 className="headin1">welcome</h1>
          <h2 className="headin2">wanna make Todo list</h2>
        </div>
        <button onClick={() => loginWithRedirect()} className="btnn">
          Login
        </button>
      </div>
    </div>
  );
}

export default HomePage;
