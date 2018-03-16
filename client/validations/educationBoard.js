import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isNull(data.board_name)) {
    errors.board_name = 'This field is required';
  }
  if (Validator.isNull(data.board_short_name)) {
    errors.board_short_name = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
