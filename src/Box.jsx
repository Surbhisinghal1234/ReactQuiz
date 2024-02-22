import React, { useState } from "react";
// import  Box from './Box'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Box(props) {
  // const [status, setStatus] = useState({
  //   box1: true,
  //   box2: true,

  //   box3: true,

  //   box4: true,
  // });

  // function handleClick() {
  //   setStatus({ ...status, [`box${props.num}`]: !status[`box${props.num}`] });
  // }
  return (
    <>
      {/* <div id={`box${props.num}`} className="box">
        <h2>
          Box{props.num} <ArrowDropDownIcon onClick={handleClick} />
        </h2>

        <img
          src="https://placehold.co/300x200"
          alt=""
          className={status[`box${props.num}`] ? "image" : ""}
        />
        <p className={status[`box${props.num}`] ? "visible" : ""}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          animi voluptas dignissimos cum. Consequuntur eveniet adipisci
          excepturi provident? Quas, itaque.
        </p>
      </div> */}
    </>
  );
}

export default Box;
