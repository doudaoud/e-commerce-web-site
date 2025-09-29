import React from "react";
import "./styles/message.css";
export default function Message() {
  return (
    <div className="message-container"
      style={{
        color: "white",
        backgroundColor: "rgb(16, 16, 16)",
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        height: "44px",
        fontFamily: "sans-serif",
        fontSize: "14px",
        
      }}
    >
      <span className="lang" style={{
        marginLeft:'93px'
      }}>
        <span  style={{ marginRight: "10px" }}>
          EN
          <span
            style={{
              
              position: "relative",
              marginLeft: "10px",
              color: "gray",
            }}
          >
            |
          </span>
        </span>
        <span> STORE LOCATION</span>
      </span>
      <p className="discount">20% OFF WITH SMS OR EMAIL SIGN UP</p>
      <p style={{marginRight:"93px"}} className="phone">(+213) – 551 860 590</p>
    </div>
  );
}
