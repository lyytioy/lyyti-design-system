import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMouseSmart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 12a2.252 2.252 0 01-2.25-2.25v-3A2.252 2.252 0 0112 4.5a2.252 2.252 0 012.25 2.25v3A2.252 2.252 0 0112 12zm0-6a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3A.75.75 0 0012 6z" />,
    <path d="M12 24c-4.549 0-8.25-3.701-8.25-8.25v-7.5C3.75 3.701 7.451 0 12 0s8.25 3.701 8.25 8.25v7.5c0 4.549-3.701 8.25-8.25 8.25zm0-22.5a6.758 6.758 0 00-6.75 6.75v7.5c0 3.722 3.028 6.75 6.75 6.75s6.75-3.028 6.75-6.75v-7.5A6.758 6.758 0 0012 1.5z" />
  );

export default SvgMouseSmart;
