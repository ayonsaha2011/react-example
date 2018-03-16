import React from 'react';
import CountTo from 'react-count-to';

class Dashboard extends React.Component {
  render() {
    return (
      
        <div className="container-fluid">
            <div className="block-header">
                <h2>DASHBOARD</h2>
            </div>


            <div className="row clearfix">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box bg-pink hover-expand-effect">
                        <div className="icon">
                            <i className="material-icons">playlist_add_check</i>
                        </div>
                        <div className="content">
                            <div className="text">NEW TASKS</div>
                            <div className="number count-to"><CountTo delay={10} to={125} speed={1000} /></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box bg-cyan hover-expand-effect">
                        <div className="icon">
                            <i className="material-icons">help</i>
                        </div>
                        <div className="content">
                            <div className="text">NEW TICKETS</div>
                            <div className="number count-to"><CountTo delay={10} from={50} to={257} speed={2000} /></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box bg-light-green hover-expand-effect">
                        <div className="icon">
                            <i className="material-icons">forum</i>
                        </div>
                        <div className="content">
                            <div className="text">NEW COMMENTS</div>
                            <div className="number count-to"><CountTo delay={10} to={243} speed={1000} /></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box bg-orange hover-expand-effect">
                        <div className="icon">
                            <i className="material-icons">person_add</i>
                        </div>
                        <div className="content">
                            <div className="text">NEW VISITORS</div>
                            <div className="number count-to"><CountTo delay={10} to={1225} speed={1500} /></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row clearfix">

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="card">
                        <div className="body bg-pink">
                            <div className="sparkline" data-type="line" data-spot-Radius="4" data-highlight-Spot-Color="rgb(233, 30, 99)" data-highlight-Line-Color="#fff"
                                 data-min-Spot-Color="rgb(255,255,255)" data-max-Spot-Color="rgb(255,255,255)" data-spot-Color="rgb(255,255,255)"
                                 data-offset="90" data-width="100%" data-height="92px" data-line-Width="2" data-line-Color="rgba(255,255,255,0.7)"
                                 data-fill-Color="rgba(0, 188, 212, 0)">
                                12,10,9,6,5,6,10,5,7,5,12,13,7,12,11
                            </div>
                            <ul className="dashboard-stat-list">
                                <li>
                                    TODAY
                                    <span className="pull-right"><b>1 200</b> <small>USERS</small></span>
                                </li>
                                <li>
                                    YESTERDAY
                                    <span className="pull-right"><b>3 872</b> <small>USERS</small></span>
                                </li>
                                <li>
                                    LAST WEEK
                                    <span className="pull-right"><b>26 582</b> <small>USERS</small></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="card">
                        <div className="body bg-cyan">
                            <div className="m-b--35 font-bold">LATEST SOCIAL TRENDS</div>
                            <ul className="dashboard-stat-list">
                                <li>
                                    #socialtrends
                                    <span className="pull-right">
                                        <i className="material-icons">trending_up</i>
                                    </span>
                                </li>
                                <li>
                                    #materialdesign
                                    <span className="pull-right">
                                        <i className="material-icons">trending_up</i>
                                    </span>
                                </li>
                                <li>#adminbsb</li>
                                <li>#freeadmintemplate</li>
                                <li>#bootstraptemplate</li>
                                <li>
                                    #freehtmltemplate
                                    <span className="pull-right">
                                        <i className="material-icons">trending_up</i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="card">
                        <div className="body bg-teal">
                            <div className="font-bold m-b--35">ANSWERED TICKETS</div>
                            <ul className="dashboard-stat-list">
                                <li>
                                    TODAY
                                    <span className="pull-right"><b>12</b> <small>TICKETS</small></span>
                                </li>
                                <li>
                                    YESTERDAY
                                    <span className="pull-right"><b>15</b> <small>TICKETS</small></span>
                                </li>
                                <li>
                                    LAST WEEK
                                    <span className="pull-right"><b>90</b> <small>TICKETS</small></span>
                                </li>
                                <li>
                                    LAST MONTH
                                    <span className="pull-right"><b>342</b> <small>TICKETS</small></span>
                                </li>
                                <li>
                                    LAST YEAR
                                    <span className="pull-right"><b>4 225</b> <small>TICKETS</small></span>
                                </li>
                                <li>
                                    ALL
                                    <span className="pull-right"><b>8 752</b> <small>TICKETS</small></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row clearfix">

                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <div className="card">
                        <div className="header">
                            <h2>TASK INFOS</h2>
                            <ul className="header-dropdown m-r--5">
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">more_vert</i>
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <div className="table-responsive">
                                <table className="table table-hover dashboard-task-infos">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Task</th>
                                            <th>Status</th>
                                            <th>Manager</th>
                                            <th>Progress</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Task A</td>
                                            <td><span className="label bg-green">Doing</span></td>
                                            <td>John Doe</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-green" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" ></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Task B</td>
                                            <td><span className="label bg-blue">To Do</span></td>
                                            <td>John Doe</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-blue" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" ></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Task C</td>
                                            <td><span className="label bg-light-blue">On Hold</span></td>
                                            <td>John Doe</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-light-blue" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" ></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Task D</td>
                                            <td><span className="label bg-orange">Wait Approvel</span></td>
                                            <td>John Doe</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" ></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Task E</td>
                                            <td>
                                                <span className="label bg-red">Suspended</span>
                                            </td>
                                            <td>John Doe</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-red" role="progressbar" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100" ></div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="card">
                        <div className="header">
                            <h2>BROWSER USAGE</h2>
                            <ul className="header-dropdown m-r--5">
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">more_vert</i>
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <div id="donut_chart" className="dashboard-donut-chart"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
  }
}

export default Dashboard;
