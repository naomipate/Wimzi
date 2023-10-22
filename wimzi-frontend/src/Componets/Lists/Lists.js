import React from 'react'
import "./Lists.css"; 

function Lists() {
  return (
    <div className='list-container'>
    <ul className="list-group">
    {/* <li className="list-group-item d-flex justify-content-between align-items-center">
        <button className="list-group-item d-flex justify-content-between align-items-center">
        Add
        </button>
  </li> */}
  <button className="list-group-item d-flex justify-content-between align-items-center list-group-item-info">
        Add New Reminder
        </button>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span className="badge bg-info  rounded-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    A second list item
    <span className="badge bg-info rounded-pill">2</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    A third list item
    <span className="badge bg-info  rounded-pill">1</span>
  </li>
</ul>
<button className='button-52'>
Submit
</button>
</div>
  )
}

export default Lists