import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
export default function Card() {
  const [items, SetItems] = useState([]);
  return (
    <div
      className="card-container"
      style={{
        position: " absolute",
        top: "0%",
        left: "0%",
        background: "rgba(0, 0, 0, 0.637)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "480px",
          height: "317px",
          background: "white",
        }}

      >
        <div
          className="hedear"
          style={{
            width: "100%",
            height: "92px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgb(230, 230, 230)",
          }}
        >
          <h2>YOUR CARD</h2>
          <IconButton aria-label="cancel">
            <CloseIcon />
          </IconButton>
        </div>
        <div
          className="body"
          style={{
           
            width: "100%",
            height: "224px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {items.length === 0 ? (
            <p
              style={{
                color: "rgb(112, 112, 112)",
              }}
            >
              no items found in your card
            </p>
          ) : (
            <div>
              {items.map((item) => {
                return (
                  <>
                    <div className="item">
                      <img src={item.img} alt="" />

                      {/* TODO: apres il faut ajouter tout  */}
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
