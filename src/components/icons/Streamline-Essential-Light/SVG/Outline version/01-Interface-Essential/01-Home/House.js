import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHouse = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 24C.673 24 0 23.327 0 22.5V9.987c0-.465.21-.895.576-1.181l10.5-8.218c.263-.206.591-.319.924-.319s.661.113.924.319l10.5 8.218c.366.286.576.716.576 1.18V22.5c0 .827-.673 1.5-1.5 1.5h-21zM12 1.269a.5.5 0 00-.308.106l-10.5 8.218A.498.498 0 001 9.987V22.5a.5.5 0 00.5.5h21a.5.5 0 00.5-.5V9.987a.496.496 0 00-.192-.393l-10.5-8.218A.495.495 0 0012 1.269z" />
  );

export default SvgHouse;
