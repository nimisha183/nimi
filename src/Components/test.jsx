import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup
    trigger={<button className="button"> Additional details </button>}
    modal
    nested>
    {(close) => (
      <div>
        <button onClick={close}>&times;</button>
        <div>
          <br />
          <label>Who's details will you like to fill?</label>
          <div>
            <input type="radio" name="parent" /> Mother <br />
            <input type="radio" name="parent" /> Father <br />
          </div>
        </div>
        <br />
        <label>Mobile</label>
        <br />
        <input name="mobile" type="number" />
        <br />
        <label>Address</label>
        <br />
        <input name="address" type="text" />
        <br />

        <br />
        <div>
          <button type="reset"> Clear </button>
          {"   "}

          <button
            className="button"
            onClick={() => {
              console.log("modal closed after submission");
              close();
            }}>
            Submit
          </button>
        </div>
      </div>
    )}
  </Popup>
);
