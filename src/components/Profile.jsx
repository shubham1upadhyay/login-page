/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import CreateContext from "../context/CreateContext";
import { useState, useEffect } from "react";
import "../index.css";
import "../styles/Profile.css";
import { useNavigate } from 'react-router';

let userdata = JSON.parse(localStorage.getItem("userdata"));

let userId = JSON.parse(localStorage.getItem("userId"));

console.log(userId);

const Profile = () => {
  const [userData, setUserData] = useState();

  let { userId, setUserId } = useContext(CreateContext);

  async function fetchdata() {
    let responce = await axios
      .get(`https://dummyjson.com/users/${userId}`)
      .then((resp) => resp)
      .catch((error) => console.log(error));
    console.log(responce.data);
    setUserData(responce.data);
  }

  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(userData) ;

  let navigate = useNavigate();

  const logout = (e)=>{
    e.preventDefault();
    alert("Logged Out Success !")
     navigate("/");
  }

  return (
    <div class="container emp-profile">
      {userData && (
        <>
          <form method="post">
            <div class="row">
              <div class="col-md-4">
                <div class="profile-img">
                  <img src={userData.image} alt="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="profile-head">
                  <h5>
                    {userData.firstName} {userData.lastName}
                  </h5>
                  <h6>Maiden Name: {userData.maidenName}</h6>
                  <p class="proile-rating">
                    Age : <span>{userData.age}</span>
                  </p>
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li class="nav-item"></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-2">
                <button onClick={logout} className="btn btn-dark">
                  Logout
                </button>
              </div> 
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="profile-work">
                  <h5>Basic Info</h5>
                  <small>Height: {userData.height}</small>
                  <br />
                  <small>Weight: {userData.weight}</small>
                  <small>Eye Color: {userData.eyeColor}</small>
                  <br />
                  <small>Hair Color: {userData.hair.color}</small>
                  <br />
                  <small>Hair Type: {userData.hair.type}</small>
                  <br />
                  <small>Postal Code: {userData.address.postalCode}</small>
                  <br />
                  <a href={userData.domain}>Website: {userData.domain}</a>
                </div>
              </div>
              <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.id}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Name</label>
                      </div>
                      <div class="col-md-6">
                        <p>
                          {userData.firstName} {userData.lastName}
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Email</label>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.email}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.phone}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Birthday</label>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.birthDate}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Blood Group</label>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.bloodGroup}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Address</label>
                      </div>
                      <div class="col-md-6">
                        <p>
                          {userData.address.address} {userData.address.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Profile;
