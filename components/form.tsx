import React, { useState, useEffect } from 'react';
import css from 'styles/cart.module.scss';
import Input from 'components/element/input';
import DifferentAdd from '../pages/cart/diiferentadd';
import { FormikProps } from 'formik/dist/types';

interface FormProps {
  onChange?: (data: any) => void;
  formik: FormikProps<any>;
}

const ContactForm = ({ formik }: FormProps) => {
  console.log("DATTTTTTTTTTTTTTTTTTTT",formik);
  
  // const [checked, setChecked] = useState(false);
  // const [cliscked, setClicked] = useState(false);
  // const handleCheccked = () => {
  //   if (cliscked == false) {
  //     setChecked(true);
  //     setClicked(true);
  //   } else {
  //     setChecked(false);
  //     setClicked(false);
  //   }
  // };

  // useEffect(() => {
  //   // Load form data from localStorage when the component mounts
  //   const savedData = localStorage.getItem('formDataUserAddress');
  //   if (savedData) {
  //     const parsedData = JSON.parse(savedData);
  //     formik.setValues(parsedData);
  //   }
  // }, []); 
  return (
    <div className={css.item1}>
      <div className={css.billformbox}>
        <h3>YOURS DETAILS</h3>
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.values.firstName?formik.errors.firstName:"" as any}
                     value={formik.values.firstName || ""}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    label="Last Name*"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.values.lastName?formik.errors.lastName:"" as any}
                     value={formik.values.lastName || ""}
                  />
                </div>
                <div className="col-md-12">
                  <Input
                    type="tel"
                    name="phone"
                    id="country"
                    placeholder="Phone Number"
                    label="Phone *"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.values.phone?formik.errors.phone:"" as any}
                    value={formik.values.phone || ""}
                  />
                </div>

                <div className="col-md-12">
                  <Input
                    name="email"
                    label="Email address *"
                    placeholder="Email Address"
                    id="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.values.email? formik.errors.email:"" as any}
                    value={formik.values.email || ""}
                  />
                </div>
              </div>
            </li>
          </div>

          <h3 className={css.formh3}>DELIVERY ADDRESS</h3>
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
                  <Input
                    type="text"
                    name="houseNumber"
                    placeholder="House number and street name"
                    label="Street address *"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.values.houseNumber? formik.errors.houseNumber:"" as any}
                        value={formik.values.houseNumber || ""}
                  />
                  <Input
                    type="text"
                    name="houseAddress"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    label=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.values.houseAddress? formik.errors.houseAddress:"" as any}
                    value={formik.values.houseAddress || ""}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <Input
                  id="town"
                  type="text"
                  name="townCity"
                  placeholder="Town/City..."
                  label="Town / City *"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.values.townCity? formik.errors.townCity:"" as any}
                      value={formik.values.townCity || ""}
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.values.postcode? formik.errors.postcode:"" as any}
                       value={formik.values.postcode || ""}
                  />
                </div>
              </div>
            </li>
            {/* <li>
              <div className={css['radio-boxdiff']} onClick={handleCheccked}>
                <input type="radio" checked={checked} />
                <label> DELIVER TO A DIFFERENT ADDRESS?</label>
              </div>
            </li> */}
          </div>
        </ul>
      </div>
    </div>
  );
};
export default ContactForm;
