import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isNull(data.display_name)) {
    errors.display_name = 'This field is required';
  }
  if (Validator.isNull(data.email)) {
    errors.email = 'This field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (!Validator.isLength(data.mobile, {min:10, max: 10})) {
    errors.mobile = 'This field is most be a mobile number';
  }
  if (!Validator.whitelist(data.mobile, '/^[0-9]+$/')) {
    errors.mobile = 'This field is most be a mobile number';
  }
  if (Validator.isNull(data.password)) {
    errors.password = 'This field is required';
  }
  if (!Validator.isLength(data.password, {min:6, max: 100})) {
    errors.password = 'This field is minimum 6 characters required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
