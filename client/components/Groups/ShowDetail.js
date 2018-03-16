import React from 'react';

class ShowDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: false};
  }

  render() {
    return (
            <div className="container-fluid">
              <div className="block-header">
                  <h2>Groups</h2>
              </div>
              <div className="row clearfix">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="card">
                          <div className="header">
                              <h2>
                                  Group Details
                              </h2>
                          </div>
                          <div className="body">


                          </div>
                      </div>
                  </div>
              </div>
            </div>
    );
  }
}

export default ShowDetail;
