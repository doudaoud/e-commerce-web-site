import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
export default function Card() {
  const [items, SetItems] = useState([]);
  return (
    <div className="card-container">
      <div className="card">
        <div className="hedear">
          <h2>YOUR CARD</h2>
          <IconButton aria-label="cancel">
            <CloseIcon />
          </IconButton>
        </div>
        <div className="body">
          {items.length === 0 ? (
            <p>no items found in your card</p>
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
