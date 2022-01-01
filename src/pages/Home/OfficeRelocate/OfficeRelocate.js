import React from "react";
import "./OfficeRelocate.css";
import {useNavigate} from "react-router-dom"

const OfficeRelocate = () => {
  const navigate=useNavigate()
  const corporateOfcHandler=()=>{
    navigate("/Services")
  }
  return (
    <div className="xyz">
      <h1>Corporate Office Moving</h1>
      <div onClick={corporateOfcHandler} className="ofcRelcocation">
        <div data-aos="zoom-in" class="photo-album ">
          <div class="photo-frame">
            <div class="photo">
              <img src="https://i.ibb.co/FggjVR1/ofc1.png" alt="img" />
            </div>
            <div class="photo-details">
              <h3><b>Corporate Relocation</b></h3>
              <p>
              Thus hiring experienced packers and movers has no substitute when you are planning corporate shifting. Jinni Relocation hereby offers an extensive range of services in office shifting within the limited possible budget for you.
              </p>
            </div>
          </div>
          <div class="photo-frame">
            <div class="photo">
              <img src="https://i.ibb.co/mB8xH97/ofc3.png" alt="img" />
            </div>
            <div class="photo-details">
              <h3><b>Corporate Relocation</b></h3>
              <p>
              Thus hiring experienced packers and movers has no substitute when you are planning corporate shifting. Jinni Relocation hereby offers an extensive range of services in office shifting within the limited possible budget for you.
              </p>
            </div>
          </div>
          <div class="photo-frame">
            <div class="photo">
              <img src="https://i.ibb.co/LxX9yXJ/ofc6.png" alt="img" />
            </div>
            <div class="photo-details">
              <h3><b>Corporate Relocation</b></h3>
              <p>
              Thus hiring experienced packers and movers has no substitute when you are planning corporate shifting. Jinni Relocation hereby offers an extensive range of services in office shifting within the limited possible budget for you.
              </p>
            </div>
          </div>
          <div class="photo-frame">
            <div class="photo">
              <img src="https://i.ibb.co/PMQD92d/of4.png" alt="img" />
            </div>
            <div class="photo-details">
              <h3><b>Corporate Relocation</b></h3>
              <p>
              Thus hiring experienced packers and movers has no substitute when you are planning corporate shifting. Jinni Relocation hereby offers an extensive range of services in office shifting within the limited possible budget for you.
              </p>
            </div>
          </div>

          <div class="photo-frame">
            <div class="photo">
              <img src="https://i.ibb.co/jGZ8VPY/ofc2.png" alt="img" />
            </div>
            <div class="photo-details">
              <h3><b>Corporate Relocation</b></h3>
              <p>
              Thus hiring experienced packers and movers has no substitute when you are planning corporate shifting. Jinni Relocation hereby offers an extensive range of services in office shifting within the limited possible budget for you.
              </p>
            </div>
          </div>
          <div class="photo-frame">
            <div class="photo">
              <img src="https://i.ibb.co/4d2XV5j/pfc8-1.png" alt="img" />
            </div>
            <div class="photo-details">
              <h3><b>Corporate Relocation</b></h3>
              <p>
              Thus hiring experienced packers and movers has no substitute when you are planning corporate shifting. Jinni Relocation hereby offers an extensive range of services in office shifting within the limited possible budget for you.
              </p>
            </div>
          </div>
          <div class="photo-frame">
            <div class="photo">
              <img src="https://i.ibb.co/87Yrrk6/of5.png" alt="img" />
            </div>
            <div class="photo-details">
              <h3><b>Corporate Relocation</b></h3>
              <p>
              Thus hiring experienced packers and movers has no substitute when you are planning corporate shifting. Jinni Relocation hereby offers an extensive range of services in office shifting within the limited possible budget for you.
              </p>
            </div>
          </div>
          <div class="photo-frame">
            <div class="photo">
              <img src="https://i.ibb.co/RSxm2fv/ofc7.png" alt="img" />
            </div>
            <div class="photo-details">
              <h3><b>Corporate Relocation</b></h3>
              <p>
              Thus hiring experienced packers and movers has no substitute when you are planning corporate shifting. Jinni Relocation hereby offers an extensive range of services in office shifting within the limited possible budget for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeRelocate;
