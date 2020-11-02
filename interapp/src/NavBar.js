import React from "react" ;

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function NavBar(){
return(
 <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
  <h5 class="my-0 mr-md-auto font-weight-normal">AppTrack</h5>
  <nav class="my-2 my-md-0 mr-md-3">
    <a class="p-2 text-dark" href="/">Calendar</a>
    <a class="p-2 text-dark" href="/newApplication">Enter Application</a>
    <a class="p-2 text-dark" href="/appliedHistory">History</a>
  </nav>
</div>
);
}
export default NavBar;