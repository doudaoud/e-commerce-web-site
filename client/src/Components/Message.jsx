import React from "react";

export default function Message() {
  return (
    <div
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
        // fontWeight:"300px"
      }}
    >
      <span style={{
        marginLeft:'93px'
      }}>
        <span style={{ marginRight: "10px" }}>
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
      <p>20% OFF WITH SMS OR EMAIL SIGN UP</p>
      <p style={{marginRight:"93px"}}>(+213) – 551 860 590</p>
    </div>
  );
}
