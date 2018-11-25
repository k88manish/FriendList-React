import React, { Component } from "react";
import PropType from "prop-types";
import * as constant from "../constants/Common";
import style from "./Pagination.css";

class Pagination extends Component {
  getPages(props) {
    const { recordCount, pageSize, activePage } = props;
    const totalPages = Math.ceil(recordCount / pageSize);
    const startPage = activePage - 2 > 1 ? activePage - 2 : 1;
    const endPage = activePage + 2 > totalPages ? totalPages : activePage + 2;

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return { pages, totalPages };
  }

  onPageBtnClick = page => {
    this.props.loadPage(page);
  };

  onNextOrPrevClick = btn => {
    const { activePage } = this.props;
    if (btn === constant.NEXT) {
      this.props.loadPage(activePage + 1);
    } else if (btn === constant.PREVIOUS) {
      this.props.loadPage(activePage - 1);
    }
  };

  render() {
    const { activePage } = this.props;
    const { pages, totalPages } = this.getPages(this.props);
    return (
      <div className={style.paginationBar}>
        <ul className={style.listStyle}>
          {activePage > 1 && (
            <li className="prev" onClick={() => this.onNextOrPrevClick(constant.PREVIOUS)}>
              {constant.PREVIOUS}
            </li>
          )}
          {pages.map(e => (
            <li key={e} className={e === activePage ? style.active : ""} onClick={() => this.onPageBtnClick(e)}>
              {e}
            </li>
          ))}
          {activePage < totalPages && (
            <li className="next" onClick={() => this.onNextOrPrevClick(constant.NEXT)}>
              {constant.NEXT}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  activePage: PropType.number.isRequired,
  recordCount: PropType.number.isRequired,
  pageSize: PropType.number.isRequired,
  loadPage: PropType.func.isRequired
};

export default Pagination;
