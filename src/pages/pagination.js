import React, { Component } from "react";
import { Colxx } from "./custom-bootstrap";
import { Nav, NavItem, NavLink } from "reactstrap";
const Pagination = ({ currentPage, totalPage, onChangePage }) => {
  return (
    <div class="pagination">
      <a href="#">Previous</a>
      <a href="#">1</a>
      <a class="active" href="#">
        2
      </a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">Next</a>
    </div>
  );
};

export default Pagination;
