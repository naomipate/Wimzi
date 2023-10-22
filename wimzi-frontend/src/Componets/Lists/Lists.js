import React from 'react'
import SubLists from './SubLists';
import "./Lists.css"; 

function Lists() {
  return (
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        New Reminder
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <form className='input-submit'>
  <div class="mb-3">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" class="btn btn-info">+</button>
</form>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <form className='input-submit'>
  <div class="mb-3">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" class="btn btn-info">+</button>
</form>

<SubLists/>
    </div>
    </div>
  </div>
</div>
  )
}

export default Lists