import React from 'react';
import classnames from 'classnames';

class TextFieldGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }



  render() {
    const {  field, value, icons, label, error, type, focus, onChange, onBlur, GroupStyle } = this.props;
    const IconGroup = (<div className="input-group">
          {icons && <span className="input-group-addon"><i className="material-icons">{icons}</i></span>}
            <div className={classnames('form-line', { 'error': error })}>
              <input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                type={type}
                name={field}
                placeholder={label}
                autoFocus={focus} 
                className="form-control"
              />
            </div>
            {error && <span className="help-block">{error}</span>}
        </div>);
    const floatingLabelGroup = (<div className="form-group form-float">
                                    <div className={classnames('form-line', { 'error': error })}>
                                        <input 
                                          onChange={onChange}
                                          onBlur={onBlur}
                                          value={value}
                                          type={type}
                                          name={field}
                                          autoFocus={focus} 
                                          className="form-control" 
                                        />
                                        <label className="form-label">{label}</label>
                                    </div>
                                    {error && <span className="help-block">{error}</span>}
                                </div>);
    const HorizontalGroup = (<div class="row clearfix">
                                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                        <label>{label}</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                        <div class="form-group">
                                            <div className={classnames('form-line', { 'error': error })}>
                                                <input 
                                                  onChange={onChange}
                                                  onBlur={onBlur}
                                                  value={value}
                                                  type={type}
                                                  name={field}
                                                  placeholder={label}
                                                  autoFocus={focus} 
                                                  className="form-control" 
                                                />
                                            </div>
                                        </div>
                                      {error && <span className="help-block">{error}</span>}
                                    </div>
                                </div>);
    let TextField = '';
    if (GroupStyle == 'icon') {
      TextField = IconGroup;
    }
    else if (GroupStyle == 'floating') {
      TextField = floatingLabelGroup;
    }
    else {
      TextField = HorizontalGroup;
    }

    return (
         TextField
    );
  }
}


TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  icons: React.PropTypes.string,
  focus: React.PropTypes.bool,
  type: React.PropTypes.string.isRequired,
  GroupStyle: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text',
  GroupStyle: 'Horizontal', // 'Horizontal', 'icon', 'floating'
  focus: false,
  icons: '',
}

export default TextFieldGroup;
