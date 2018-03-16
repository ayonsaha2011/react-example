import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isNull(data.session_name)) {
    errors.session_name = 'This field is required';
  }
  if (Validator.isNull(data.session_short_name)) {
    errors.session_short_name = 'This field is required';
  }
  if (Validator.isNull(data.session_db_name)) {
    errors.session_db_name = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
