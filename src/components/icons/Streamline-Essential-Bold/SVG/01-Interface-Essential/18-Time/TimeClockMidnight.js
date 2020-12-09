import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockMidnight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10z" />,
    <circle cx={12} cy={12.001} r={8} />
  );

export default SvgTimeClockMidnight;
