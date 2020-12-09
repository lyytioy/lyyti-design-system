import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgListBullets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={2.5} cy={3.998} r={2.5} />,
    <path d="M8.5 5H23a1 1 0 000-2H8.5a1 1 0 000 2z" />,
    <circle cx={2.5} cy={11.998} r={2.5} />,
    <path d="M23 11H8.5a1 1 0 000 2H23a1 1 0 000-2z" />,
    <circle cx={2.5} cy={19.998} r={2.5} />,
    <path d="M23 19H8.5a1 1 0 000 2H23a1 1 0 000-2z" />
  );

export default SvgListBullets;
