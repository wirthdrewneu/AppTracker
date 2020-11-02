import React from "react";
/*import { render } from "react-dom";*/
import "./form.css";



function EventForm(props){
 console.log("Event form" , props.eventdata);


    return(    

      <div className = "align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <div class="card-deck mb-3 text-center">
    <div class="card mb-6 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Add Stage</h4>
      </div>
      <div class="card-body">
         <form action="/createappevent" method="Post">
        <div className="form-group row">
          <label for="company" className="col-10 control-label" style={{"textAlign": "left"}}>Company</label>
          <div className="col-10">
            <input className="form-control" type="text" id="company" name="title"/>
          </div>
        </div>
      
       
     
        <div className="form-group row">
          <label for="appliedDate" className="col-10 control-label" style={{"textAlign": "left"}}>Start Date</label>
          <div className="col-10">
            <input className="form-control" type="date"  id="appliedDate1" name="start" />
          </div>
        </div>

      <div className="form-group row">
          <label for="appliedDate" className="col-10 control-label" style={{"textAlign": "left"}}>End Date</label>
          <div className="col-10">
            <input className="form-control" type="date"  id="appliedDate2" name="end" />
          </div>
        </div>

        <div className="form-group row">
          <label for="stage" className="col-10 control-label" style={{"textAlign": "left"}}>Stage</label>
          <div className="col-10">
            <select className="form-control" id="stage" name="Stage">
              <option>Applied/Apply</option>
              <option>Application Deadline</option>
              <option>Online Assessment</option>
              <option>Interview</option>
              <option>Follow Up</option>
            </select>
          </div>
        </div>

        
        <button type="submit" className="btn btn-lg btn-block btn-outline-primary">Submit</button>
      </form>
      </div>
    </div>
    <div class="card mb-6 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Event Details</h4>
      </div>
      <div class="card-body">


 <form action="/delappevent" method="Post">
        <input className="form-control" type="text" value ={props.eventdata._id} id="_id" name="_id"/>
        <div className="form-group row">
          <label for="company" className="col-10 control-label" style={{"textAlign": "left"}}>Company</label>
          <div className="col-10">
            <input className="form-control" type="text" value ={props.eventdata.title} id="company" name="title"/>
          </div>
        </div>
      
       
     
        <div className="form-group row">
          <label for="appliedDate" className="col-10 control-label" style={{"textAlign": "left"}}>Start Date</label>
          <div className="col-10">
            <input className="form-control" value = {props.eventdata.start} type="date"  id="appliedDate1" name="start" />
          </div>
        </div>

      <div className="form-group row">
          <label for="appliedDate" className="col-10 control-label" style={{"textAlign": "left"}}>End Date</label>
          <div className="col-10">
            <input className="form-control" type="date"  id="appliedDate2" name="end" value = {props.eventdata.end} />
          </div>
        </div>

        <div className="form-group row">
          <label for="stage" className="col-10 control-label" style={{"textAlign": "left"}}>Stage</label>
          <div className="col-10">
            <select className="form-control" id="stage" name="Stage" value = {props.eventdata.Stage}>
              <option>Applied/Apply</option>
              <option>Application Deadline</option>
              <option>Online Assessment</option>
              <option>Interview</option>
              <option>Follow Up</option>
            </select>
          </div>
        </div>

        
        <button type="submit" className="btn btn-lg btn-block btn-outline-primary">Delete</button>
      </form>
        

      
      </div>
    </div>
  </div>
    </div>);

  }
export default EventForm;