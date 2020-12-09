import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGraphStats = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M.75 11.75h3.5a1.5 1.5 0 001.385-.923l2.6-6.115a.75.75 0 011.4.051l4.734 14.725a.75.75 0 001.4.051l2.595-6.866a1.5 1.5 0 011.385-.923h3.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgGraphStats;
