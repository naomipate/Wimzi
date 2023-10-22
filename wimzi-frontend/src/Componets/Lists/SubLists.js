import React from 'react'
import "./SubLists.css"; 

function SubLists() {
  return (
    <ul className="list-group list-group-flush">
  <li className="list-group-item">
  <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched"/>
    An item</li>
    <li className="list-group-item">
  <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched"/>
    An item</li>
</ul>
  )
}

export default SubLists