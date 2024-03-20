import React from "react";
import "./Form.css";
import FormComponent from "../../common/formComponent/FormComponent";
const Form = () => {
  return (
    <div className="form_component_container">
      <div className="form_component">
        <h1>Fill the form to book your event</h1>
        <div className="actual_form">
          <FormComponent type="text" placeholder="Your Name" />
          <FormComponent type="text" placeholder="Your Name" />
        </div>
        <div className="actual_form">
          <FormComponent type="text" placeholder="Your Name" />
          <FormComponent type="text" placeholder="Your Email" />
        </div>
        <div className="actual_form">
          <FormComponent type="text" placeholder="Your Phone Number" />
          <FormComponent type="text" placeholder="Choose event type" />
        </div>
        <div className="actual_form">
          <FormComponent type="text" placeholder="Event start time" />
          <FormComponent type="text" placeholder="Eveny end time" />
        </div>
        <div className="actual_form">
          <FormComponent type="text" placeholder="Postal Code 1" />
          <FormComponent type="text" placeholder="Postal code 2" />
        </div>
        <div className="actual_form">
          <FormComponent type="text" placeholder="Event date" />
          <FormComponent type="text" placeholder="Add another event date" />
        </div>
        <button className="submit_form">Submit form</button>
      </div>
    </div>
  );
};

export default Form;
