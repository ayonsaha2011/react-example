import React from 'react';
import classnames from 'classnames';
let self;
class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.pagination = this.pagination.bind(this);
    this.paginationPreview = this.paginationPreview.bind(this);
    this.paginationNext = this.paginationNext.bind(this);
  }

  pagination (e) {
    const currentPage = parseInt($(e.target).attr('data-page')) - 1;
    const skip = this.props.limit * currentPage;
    this.props.handlePagination(skip, currentPage + 1);
  };
  paginationPreview (e) {
    if (this.props.currentPage > 1) {
      const currentPage = this.props.currentPage - 1;
      const skip = this.props.limit * currentPage;
      this.props.handlePagination(skip, currentPage);
    }
  };
  paginationNext (e) {
    if (this.props.currentPage < this.props.totalPage) {
      const currentPage = this.props.currentPage ;
      const skip = this.props.limit * currentPage;
      this.props.handlePagination(skip, currentPage +1);
    }
  };
  render() {
     const paginationItems = [];
     const totalPage = this.props.totalPage;
      if (totalPage < 11) {
        for (var p = 1; p <= totalPage; p++) {
          paginationItems.push(<li key={p} className={classnames({ 'active': this.props.currentPage == p })}><a data-page={p} href="javascript:void(0);" onClick={this.pagination}>{p}</a></li>);
        }
      }
      else {
        if (this.props.currentPage < 5 ) {
          for (var p = 1; p < 6; p++) {
            paginationItems.push(<li  key={p} className={classnames({ 'active': this.props.currentPage == p })}><a data-page={p} href="javascript:void(0);" onClick={this.pagination}>{p}</a></li>);
          }
            paginationItems.push(<li key={1+"..."}><a>...</a></li>);

            paginationItems.push(<li  key={totalPage} className={classnames({ 'active': this.props.currentPage == totalPage })}><a data-page={totalPage} href="javascript:void(0);" onClick={this.pagination}>{totalPage}</a></li>);
        }
        else if(this.props.currentPage > (totalPage - 5) ) {
            paginationItems.push(<li  key={1} className={classnames({ 'active': this.props.currentPage == 1 })}><a data-page={1} href="javascript:void(0);" onClick={this.pagination}>{1}</a></li>);
            paginationItems.push(<li key={1+"..."}><a>...</a></li>);

          for (var p = (totalPage - 5); p <= totalPage; p++) {
            paginationItems.push(<li key={p} className={classnames({ 'active': this.props.currentPage == p })}><a data-page={p} href="javascript:void(0);" onClick={this.pagination}>{p}</a></li>);
          }
        }
        else {

          paginationItems.push(<li key={1} className={classnames({ 'active': this.props.currentPage == 1 })}><a data-page={1} href="javascript:void(0);" onClick={this.pagination}>{1}</a></li>);
            paginationItems.push(<li  key={1+"..."}><a>...</a></li>);

          for (var p = (this.props.currentPage - 2); p <= (this.props.currentPage + 2); p++) {
            paginationItems.push(<li key={p} className={classnames({ 'active': this.props.currentPage == p })}><a data-page={p} href="javascript:void(0);" onClick={this.pagination}>{p}</a></li>);
          }

            paginationItems.push(<li key={"..."+totalPage}><a>...</a></li>);

            paginationItems.push(<li key={totalPage} className={classnames({ 'active': this.props.currentPage == totalPage })}><a data-page={totalPage} href="javascript:void(0);" onClick={this.pagination}>{totalPage}</a></li>);
        }

      }
      let fullpagination;
      if (this.props.totalPage > 1) {
          fullpagination = (
            <ul className="pagination tableScrollPagination">
                <li className={classnames({ 'disabled': this.props.currentPage == 1 })}>
                    <a href="javascript:void(0);" onClick={this.paginationPreview}>
                        <i className="material-icons">chevron_left</i>
                    </a>
                </li>
                {paginationItems}
                <li className={classnames({ 'disabled': this.props.currentPage == this.props.totalPage })}>
                    <a href="javascript:void(0);" onClick={this.paginationNext} className="waves-effect">
                        <i className="material-icons">chevron_right</i>
                    </a>
                </li>
            </ul>
          )
        }

    return ( <nav className="pull-right">  {fullpagination} </nav> );
  }
}

export default Pagination;
