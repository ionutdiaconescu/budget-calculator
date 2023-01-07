import React from "react";
import { MdSend } from "react-icons/md";
const Form = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleAdd,
  edit,
}) => {
  return (
    <form onSubmit={handleAdd}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="ex. rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="ex. 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "edit" : "add"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default Form;
