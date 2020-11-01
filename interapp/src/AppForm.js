import React from "react";
/*import { render } from "react-dom";*/

function AppForm(){
    return(    

      <div class = "align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">

      <form action="" method="">
      <p class="h4 mb-4">Add application</p>
        <div class="form-group row">
          <label for="company" class="col-10 col-form-label" >Company</label>
          <div class="col-10">
            <input class="form-control" type="text" id="company" name="Company"/>
          </div>
        </div>
        <div class="form-group row">
          <label for="role" class="col-10 col-form-label">Role</label>
          <div class="col-10">
            <input class="form-control" type="text" id="role" name="Role" />
          </div>
        </div>
        <div class="form-group row">
          <label for="type" class="col-10 col-form-label">Type</label>
          <div class="col-10">
            <input class="form-control" type="text" id="type" name="Type" />
          </div>
        </div>
        <div class="form-group row">
          <label for="recruiter" class="col-10 col-form-label">Recruiter Info</label>
          <div class="col-10">
            <input class="form-control" type="text" id="recruiter" name="RecruiterInfo" />
          </div>
        </div>
        <div class="form-group row">
          <label for="appliedDate" class="col-10 col-form-label">Date Applied</label>
          <div class="col-10">
            <input class="form-control" type="date" value="2020-10-27" id="appliedDate" name="DateApplied" />
          </div>
        </div>
        <div class="form-group row">
          <label for="stage" class="col-10 col-form-label">Stage</label>
          <div class="col-10">
            <select class="form-control" id="stage" name="Stage">
              <option>Applied</option>
              <option>Online Assessment</option>
              <option>Interview</option>
              <option>Follow Up</option>
              <option>Offer</option>
              <option>Reject</option>
              <option>Accepted</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="stage" class="col-10 col-form-label">Next Due Date</label>
          <div class="col-10">
            <input class="form-control" type="date" value="2020-10-27" id="stage" name="StageDate" />
          </div>
        </div>
        <div class="form-group row">
          <label for="jobDesc" class="col-10 col-form-label">Job Description</label>
          <div class="col-10">
            <textarea class="form-control" id="jobDesc" rows="3" name="JobDescription"></textarea>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>);

  }
export default AppForm;