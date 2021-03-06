import React from "react";
import FilterLink from "../../containers/FilterLink";
import { VisibilityFilters } from "../../actions";

const Footer = () => (
  <div className="filter">
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <span className="filter__separator">/</span>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <span className="filter__separator">/</span>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;