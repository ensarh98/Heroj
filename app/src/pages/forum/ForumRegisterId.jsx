import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react';
import Button1 from '../../shared_components/Button1';
import LogoComponent from "../../shared_components/LogoComponent";

import "./ForumRegisterId.css"

export default function ForumRegisterId() {
  const { id } = useParams();

  const [success, setSuccess] = useState(false);
  const [exists, setExists] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}forum/register/${id}/check/`)
      .then((res) => {
        if (res.data === 'token found') {
          setExists(true);
        } else {
          setExists(false);
        }
      });
  }, [])

  const onSubmit = () => {
    axios.post(`${process.env.REACT_APP_API}forum/register/${id}/`)
      .then((res) => {
        if (res.status === 201) {
          setSuccess(true);
          setTimeout(() => navigate("/login"), 3000);
        }
      });
  }

  return (
    <>
      <LogoComponent></LogoComponent>
      <div className="response-container">
        {
          !exists ?
            (<p>Register token not found.</p>) :
          success ?
            (<p>Your account is now verified. You will be redirected shortly.</p>) :
          <div>
            <p>Press button below to verify your account:</p>
            <Button1
              onClick={onSubmit} 
              text={"Vertify account"}
              font={"20px"}
            />
          </div>
        }
      </div>
    </>
  )
}