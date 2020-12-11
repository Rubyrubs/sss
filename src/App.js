import React from 'react';
import logo from './Images/logo.png';
import first from './Images/1.png';
import second from './Images/2.png';
import three from './Images/3.png';
import phone from './Images/phone.png';
import facebook from './Images/facebook.png';
import ethernet from './Images/ethernet.png';
import './App.css';
class App extends React.Component {


  render() {
    return (
      <div className="body">
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 15,
          marginBottom: 15
        }}>
          <img className="top-logo" src={logo} alt="" />
        </div>
        <div className="top-body">
          <div className="top-body-first">
            <img src={first} alt=""
            />
          </div>
          <div className="top-body-second">
            <h2>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4TH time.</h2>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img src={second} alt="" />
            <p >
              Government of India has awarded the
              <strong style={{
                fontWeight: 'bold'
              }}>
                "National Energy Conservation Award 2018"
                 </strong>
                . Mr. G. Selvaraj, Joint Managing Director of
                C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>

        <div className="bottom-body">
          <div>
            <p className="bottom-body-header">
              INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING
              OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION
            </p>
            <div className="bottom-body-img">
              <img src={three} alt="" />
            </div>
            <p className="bottom-body-desc">
              Valves - Pumps - Pipes - IotDrives & Controllers - Wires & Cables - Solar Systems - Motors
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: '2px solid red',
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20
          }}
        />

        <div className="bottom-body-second">
          <h4 style={{
            textAlign: 'center'
          }}>
            C.R.I FLUIDS SYSTEM PRODUCTS CATER TO DIVERSE SEGMENTS
          </h4>
          <p style={{
            marginTop: 20,
            textAlign: 'center',
            padding: '0px 30px'
          }}>
            CHEMICALS & PROCESS
            <span style={{
              color: 'red'
            }}>|</span>
            POWER
            <span style={{
              color: 'red'
            }}>|</span>
             WATER & WASTE WATER
             <span style={{
              color: 'red'
            }}>|</span>

              OILS & GAS
              <span style={{
              color: 'red'
            }}>|</span>
               PHARMA
               <span style={{
              color: 'red'
            }}>|</span>
                SUGARS & DISTILLERIES
                <span style={{
              color: 'red'
            }}>|</span>
                 PAPER & PULP
                 <span style={{
              color: 'red'
            }}>|</span>
                  MARINE & DEFENCE
                  <span style={{
              color: 'red'
            }}>|</span>
                   METAL & MINING
                   <span style={{
              color: 'red'
            }}>|</span>
             FOOD & BEVERAGE <span style={{
              color: 'red'
            }}>|</span>PETROCHEMICAL & REFINERIES<span style={{
              color: 'red'
            }}>|</span> SOLAR<span style={{
              color: 'red'
            }}>|</span> BUILDING<span style={{
              color: 'red'
            }}>|</span> HVAC <span style={{
              color: 'red'
            }}>|</span>FIRE FIGHTING<span style={{
              color: 'red'
            }}>|</span> AGRICULTURE & RESIDENTIAL
          </p>
        </div>

        <div className="footer">
          <div className="footer-item">
            <img src={phone} alt="" />
            <p>Toll free <span style={{
              fontWeight: 700
            }}>1800 2000 1234</span></p>
          </div>
          <div className="footer-item">
            <img src={facebook} alt="" />
            <p> www.facebook.com/cripumps</p>
          </div>
          <div className="footer-item">
            <img src={ethernet} alt="" />
            <p>www.crigroups.com</p>
          </div>
        </div>
      </div >
    )
  }


}

export default App;
