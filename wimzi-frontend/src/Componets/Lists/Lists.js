import React, { useState } from "react";
import "./Lists.css";
import data from "../../data/data";

function Lists() {
  const [dataArr, setDataArr] = useState(data);
  const [name, setName] = useState("");

  function handleUpdate() {
    const todoObj = {
      item: name,
      date: new Date(),
    };

    if (todoObj.item) {
      setDataArr([...dataArr, todoObj]);
      setName("");
    }
  }

  const deleteItem = (e) => {
    console.log(e.target.id);
    setDataArr(dataArr.filter((item) => item.item !== e.target.id));
  };

  return (
    <div className="list-container">
      <div className="input-submit">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="item"
            aria-describedby="todoInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn btn-info" onClick={() => handleUpdate()}>
          +
        </button>
      </div>
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
        {dataArr.map(({ item, date }, index) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={index}
            >
              <div>
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  id="firstCheckboxStretched"
                />
                <label
                  className="form-check-label"
                  htmlFor="firstCheckboxStretched"
                >
                  {`${new Date(date).getUTCMonth()} ${new Date(
                    date
                  ).getUTCDate()} ${new Date(date).getUTCFullYear()}: ${item}`}
                </label>
              </div>
              <div className="list-danger-infor-btn">
                <button class="btn btn-info btn-edit">Edit</button>
                <button id={item} class="btn btn-danger" onClick={deleteItem}>
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Lists;
