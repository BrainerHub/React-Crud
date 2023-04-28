const validate = (values: any) => {
  const errors: any = {};

  if (!values.firstName) {
    errors.firstName = "First Name is Required";
  }
  if (!values.middleName) {
    errors.middleName = "Middle Name  is Required";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name  is Required";
  }
  if (!values.email) {
    errors.email = "Email is Required";
  }
  if (!values.phone) {
    errors.phone = "Phone is Required";
  }
  if (!values.password) {
    errors.password = "Password is Required";
  }
  if (!values.confirm_password) {
    errors.confirm_password = "Confirm password is Required";
  }
  if (!values.gender) {
    errors.gender = "Gender is Required";
  }
  if (!values.bloodGroup) {
    errors.bloodGroup = "BloodGroup is Required";
  }
  if (!values.degree) {
    errors.degree = "Degree is Required";
  }
  return errors;
};

export default validate;
