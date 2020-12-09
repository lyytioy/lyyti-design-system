import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockCircle1Alternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10z" />,
    <path d="M19 11h-6.586L9.707 8.294a1 1 0 00-1.414 1.414l3 3A1 1 0 0012 13h7a1 1 0 000-2z" />,
    <circle cx={4.75} cy={12.001} r={1.25} />,
    <circle cx={12} cy={4.751} r={1.25} />,
    <circle cx={12} cy={19.251} r={1.25} />
  );

export default SvgTimeClockCircle1Alternate;
