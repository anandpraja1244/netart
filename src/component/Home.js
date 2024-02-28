/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import logo from "../component/assests/logo.png";
import bee from "../component/assests/1.png";
import bee2 from "../component/assests/2.png";
import { MdOutlineCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import bee3 from "../component/assests/3.png";
function Home() {
  return (
    <div>
       <div className="bgColor" >  
      <div className="container">
        <div className="row logo">
          <div className="">
            <img
              src={logo}
              width="300px"
              height="auto"
              alt="Placeholder Image"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="column-left">
            <img
              src={bee}
              width="400px"
              className="left_img"
              height="420px"
              alt="First Image"
            />
          </div>
          <div className="column-right">
            <h4>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h4>
            <div className="list">
              <ul className="child">
                <li>
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for{" "}
                  <br />
                  various projects across the globe to save energy.
                </li>
                <li>
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace
                  <br /> the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.
                </li>
              </ul>
            </div>
            <div className="right_img">
              <img
                src={bee2}
                width="auto"
                className=""
                height="420px"
                alt="Second Image"
              />
            </div>

            <p className="">
              Government of India has awarded the{" "}
              <span className="texthilight">
                "National Energy Conservation Award 2018"
              </span>
              . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
              received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha
              & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className=" over_10">
          <div className="">
            <p className="texthilight">
              INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
              RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS
              OF POWER FOR THE NATION.{" "}
            </p>
          </div>
        </div>
      </div>
      <div class=" container container_02">
        <div class="row2">
          <div class="center-content">
            <img src={bee3} className="responsev" alt="Second Image" />
            <p>
              Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables
              - Solar Systems - Motors
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <hr className="new5" />
      </div>

      <div className="container-fluid">
        <div className="over_10">
          <div className=" texthilight">
            <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="">
            <p>
              CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA
              SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING
              FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC
              FIRE FIGHTING AGRICULTURE & RESIDENTIAL
            </p>
          </div>
        </div>
      </div>
      <div class="container-fluid">
  <div class="row margTop">
    <div class="column">
      <div>
      <MdOutlineCall  size="30px" /><span>Toll free:1800 200 1234</span>
      </div>
   
     
    </div>
    <div class="column">
      <div>
      <FaFacebook  size="30px" />  <span>www.facebook.com/cripumps</span>
      </div>
      <div>
       
      
      </div>
    </div>
    <div class="column">
      <div>
      <CiGlobe  size="30px" /> <span>www.crigroups.com</span>
      </div>
     
    </div>
  </div>
</div>
    </div>
    </div>
  );
}

export default Home;
