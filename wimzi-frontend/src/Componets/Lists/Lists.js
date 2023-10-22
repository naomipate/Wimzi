
import React from 'react'
import "./Lists.css"; 

function Lists() {
  return (
    <div className='list-container'>
        <form className='input-submit mb-3'>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <button type="submit" className="btn btn-info">+</button>
        </form>
<div className='list-time'>
<label className='due-date'>Due Date: </label>
<input className='due-date-input' type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
</div>

<ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
    <div>
    <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
    <label className="form-check-label" htmlFor="firstCheckbox">First checkbox</label>  
    </div>
    <div className='list-danger-infor-btn'>
    <button className="btn btn-info btn-edit">Edit</button>
    <button className="btn btn-danger">Delete</button>
    </div>

  </li>

</ul>
</div>
  )
}

export default Lists;
