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
      <ul className="list-group">
        {dataArr.map(({ item, date }, index) => {
          return (
            <>
              <li className="list-group-item" key={index}>
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
                  {`${new Date(date).getUTCMonth()} ${new Date(
                    date
                  ).getUTCDate()} ${new Date(date).getUTCFullYear()}: ${item}`}
                </label>
              </li>
            </>
          );
        })}

        {/* <li className="list-group-item">
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
        </li>
        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            id="secondCheckboxStretched"
          />
          <label
            className="form-check-label stretched-link"
            htmlFor="secondCheckboxStretched"
          >
            Second checkbox
          </label>
        </li>
        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            id="thirdCheckboxStretched"
          />
          <label
            className="form-check-label stretched-link"
            htmlFor="thirdCheckboxStretched"
          >
            Third checkbox
          </label>
        </li> */}
      </ul>
    </div>
  );
}

export default Lists;
