import * as Yup from 'yup';

export const checkoutABPValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name Too Short!')
    .max(50, ' Name Too Long!')
    .required('Name is required'),
  addressLine1: Yup.string().required(`Address is required`),
  city: Yup.string().required(`City is required`),
  stateOrRegion: Yup.string().required(`State Or Region  is required`),
  postalCode: Yup.string()
    .matches(
      /^(([A-Z]{1,2}\d[A-Z\d]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?\d[A-Z]{2}|BFPO ?\d{1,4}|(KY\d|MSR|VG|AI)[ -]?\d{4}|[A-Z]{2} ?\d{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/gim,
      'Must be in UK Postcode formats'
    )
    .min(6, 'Must be exactly 6 digits')
    // .max(7, "Must be exactly 7 digits")
    .required(`Postcode is required`),
  phoneNumber: Yup.string()
    .matches(
      /^((((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?\(\d{4}|\d{3}))?)|((\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3})|((((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\(\d{4}|\d{3}))?$/,
      'Must be in UK Phone number'
    )
    .required(`Phone is required`),
  email: Yup.string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email'
    )
    .required('Email is required'),
  checkbox: Yup.boolean().oneOf([true], 'Required'),
});
const checkoutValidationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'First name Too Short!')
    .max(50, ' First nameToo Long!')
    .required('First name is required'),
  lastName: Yup.string()
    .min(2, 'Last name Too Short!')
    .max(50, 'Last name Too Long!')
    .required('Last name is required'),
  houseNumber: Yup.string().required(`House number is required`),
  townCity: Yup.string().required(`Town city is required`),
  postcode: Yup.string()
    .matches(
      /^(([A-Z]{1,2}\d[A-Z\d]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?\d[A-Z]{2}|BFPO ?\d{1,4}|(KY\d|MSR|VG|AI)[ -]?\d{4}|[A-Z]{2} ?\d{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/gim,
      'Must be in UK Postcode formats'
    )
    .min(6, 'Must be exactly 6 digits')
    // .max(7, "Must be exactly 7 digits")
    .required(`Postcode is required`),
  phone: Yup.string()
  .required(`Phone is required`)
    .matches(
      /^((((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?\(\d{4}|\d{3}))?)|((\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3})|((((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\(\d{4}|\d{3}))?$/,
      'Must be in UK Phone number'
    ),

  email: Yup.string()
  .required('Email is required')
    .matches(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email'
    ),
  
  checkbox: Yup.boolean().oneOf([true], 'Required'),
  // recaptcha: Yup.boolean().oneOf(
  //   [true],
  //   "Google recaptcha varification is required"
  // ),
});

export default checkoutValidationSchema;
