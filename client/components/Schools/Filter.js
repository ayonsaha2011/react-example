import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <form>
          <div className="row clearfix">
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                  <div className="form-group">
                      <div className="form-line">
                          <input type="text" className="form-control" placeholder="Email Address" />
                      </div>
                  </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                  <div className="form-group">
                      <div className="form-line">
                          <input type="password" className="form-control" placeholder="Password" />
                      </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <input type="checkbox" id="remember_me_4" className="filled-in" />
                  <label >Remember Me</label>
                  <button type="button" className="btn btn-primary btn-lg m-l-15 waves-effect">LOGIN</button>
              </div>
          </div>
      </form>
    );
  }
}

export default Filter;
