import React, {useState, useEffect } from "react";
import useInputs from "hooks/useInputs";
import css from "styles/cart.module.scss";
import Input from "components/element/input";
import Select from "components/element/select";
import Textarea from "components/element/textarea";

type EFORM = React.ChangeEvent<HTMLFormElement>;

interface FormProps {
  onChange: (data: any) => void;
}

const DifferentAdd = () => {
 

  const initialState = {
    firstName: "",
    lastName: "",
    houseNumber: "",
    townCity: "",
    postcode: "",
  };

  const { inputs, onChangeInputs } = useInputs(initialState);
  // GET INPUT VALUES IN REALTIME

  return (

      <div className={css.billformbox}>
        <form>
          <ul>
            <div className={css.billform}>
              <li>
                <div className="row">
                  <div className="col-md-6">
                    <Input
                      name="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      label="First Name*"
                      onChange={onChangeInputs}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      name="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      label="Last Name*"
                      onChange={onChangeInputs}
                    />
                  </div>
                </div>
              </li>
            </div>
            <div className={css.billform}>
              <li>
                <div className="row">
                  <div className="col-md-6">
                    <p className={css.countryinput}>Country/Region *</p>
                    <h3 className={css.countryinput1}>United Kingdom (UK)</h3>
                  </div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div className="col-md-12">
                    {/* <label htmlFor="streetaddf">Street address *</label>
                  <input
                    type="text"
                    name=""
                    placeholder="House number and street name"
                  /> */}
                    <Input
                      type="text"
                      name="houseNumber"
                      placeholder="House number and street name"
                      label="Street address *"
                     
                    />
                    <Input
                      type="text"
                      name="houseNumber"
                      placeholder="Apartment, suite, unit, etc. (optional)"
                      label=""
                   
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <Input
                    id="town"
                    type="text"
                    placeholder="Town/City..."
                    name="townCity"
                    label="Town / City *"
                 
                  />
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-md-12">
                    <Input
                      type="text"
                      name="postcode"
                      id="country"
                      placeholder="Enter your postcode"
                      label="Postcode *"
                      onChange={onChangeInputs}
                    />
                  </div>
                </div>
              </li>

            </div>
          </ul>
          {/* <button type="submit">Send</button> */}
          {/* <Button type="submit">Send</Button> */}
        </form>
      </div>
  );
};
export default DifferentAdd;
