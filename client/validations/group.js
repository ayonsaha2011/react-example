import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isNull(data.group_name)) {
    errors.group_name = 'This field is required';
  }
  if (Validator.isNull(data.group_abouttext)) {
    errors.group_abouttext = 'This field is required';
  }
  if (Validator.isNull(data.group_founder)) {
    errors.group_founder = 'This field is required';
  }
  if (Validator.isNull(data.group_website)) {
    errors.group_website = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
