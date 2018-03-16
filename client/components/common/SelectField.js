import React from 'react';
import classnames from 'classnames';



class SelectField extends React.Component {
	componentDidMount() {
    // $.AdminBSB.select.activate();
	    // $(this.refs.bootstrapSelect).selectpicker();
	  }
 	render() {
    	const { value, label, name, multiple, error, onChange, onBlur } = this.props;
      const options = (this.props.options) ? this.props.options : (<option value="">-- Please select --</option>);
      const firstOption = (this.props.firstOption) ? (<option value="">{this.props.firstOption}</option>) : "";
		return (
              <div className={classnames('form-group', { 'has-error': error })}>
                <label className="control-label">{label}</label>
                <select
                  ref="bootstrapSelect"
                  className="form-control show-tick"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  name={name}
                >
                  {firstOption}
								    {options}
                </select>
              {error && <span className="help-block">{error}</span>}
              </div>
	        );
	}

}


SelectField.propTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  error: React.PropTypes.string,
  multiple: React.PropTypes.bool,
  onChange: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func
}

SelectField.defaultProps = {
  multiple: false,
}

export default SelectField;
