import React from 'react'
import "./Lists.css"; 

function Lists() {
  return (
//     <div className='list-container'>
//     <ul className="list-group">
//     <li className="list-group-item d-flex justify-content-between align-items-center">
//         <button className="list-group-item d-flex justify-content-between align-items-center">
//         Add
//         </button>
//   </li>
//   <button className="list-group-item d-flex justify-content-between align-items-center list-group-item-info">
//         Add New Reminder
//         </button>
//   <li className="list-group-item d-flex justify-content-between align-items-center">
//     A list item
//     <span className="badge bg-info  rounded-pill">14</span>
//   </li>
//   <li className="list-group-item d-flex justify-content-between align-items-center">
//     A second list item
//     <span className="badge bg-info rounded-pill">2</span>
//   </li>
//   <li className="list-group-item d-flex justify-content-between align-items-center">
//     A third list item
//     <span className="badge bg-info  rounded-pill">1</span>
//   </li>
// </ul>
// <button className='button-52'>
// Submit
// </button>
// </div>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        New Reminder
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong>This is the secondd item's accordion body.</strong>
        <p>message</p>
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
      <strong>This is the secondd item's accordion body.</strong>
        <p>message</p>
    </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong>
        <p>message</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Lists