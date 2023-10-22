import React, { useState, useEffect } from "react";
import "./Lists.css";
import data from "../../data/data";

function Lists() {
  useEffect(() => {
    handleDataStart();
  }, []);
  const [dataArr, setDataArr] = useState([]);
  const [todo, setTodo] = useState({
    item: null, // why null?
    date: "",
  });
  async function handleOnSumbit(e) {
    e.preventDefault();
  }
  async function handleDataStart() {
    let sortedArr = data.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    // console.log(sortedArr);
    setDataArr(sortedArr);
  }

  async function handleUpdate() {}

  return (
    <div className="list-container">
      <form className="input-submit">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-info">
          +
        </button>
      </form>
      <div className="list-time">
        <label className="due-date">Due Date: </label>
        <input
          className="due-date-input"
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
      </div>

      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id="firstCheckboxStretched"
            />
            <label
              className="form-check-label stretched-link"
              htmlFor="firstCheckboxStretched"
            >
              First checkbox
            </label>
          </div>
          <div className="list-danger-infor-btn">
            <button class="btn btn-info btn-edit">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Lists;
