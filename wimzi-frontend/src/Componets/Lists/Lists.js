
import React from 'react'
import "./Lists.css"; 

function Lists() {
  return (
    <div className='list-container'>
            <form className='input-submit'>
  <div className="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-info">+</button>
</form>
<ul className="list-group">
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched"/>
    <label className="form-check-label stretched-link" htmlFor="firstCheckboxStretched">First checkbox</label>
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched"/>
    <label className="form-check-label stretched-link" htmlFor="secondCheckboxStretched">Second checkbox</label>
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched"/>
    <label className="form-check-label stretched-link" htmlFor="thirdCheckboxStretched">Third checkbox</label>
  </li>
</ul>
</div>
  )
}

export default Lists;
