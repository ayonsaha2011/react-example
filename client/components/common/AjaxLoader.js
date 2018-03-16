import React from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';

const AjaxLoader = ({show}) => {
  if (show) {
    return (
          <div className="AjaxLoaderBox">
              <ProgressBar  className="AjaxLoader" type='circular' mode='indeterminate' multicolor />
          </div>
         );
  }
  else {
    return (<span></span>)
  }
}
AjaxLoader.propTypes = {
  show: React.PropTypes.bool.isRequired
}

AjaxLoader.defaultProps = {
  show: false
}
export default AjaxLoader;
