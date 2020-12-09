import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGraphStatsCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />,
    <path d="M14.41 17.704a1.503 1.503 0 01-1.415-1L9.703 7.379l-2.256 5.65a.747.747 0 01-.697.471h-3a.75.75 0 010-1.5h2.492l2.072-5.179a1.496 1.496 0 011.952-.831c.397.16.707.483.85.886l3.292 9.328 2.19-3.827A.755.755 0 0117.25 12h3a.75.75 0 010 1.5h-2.565l-1.974 3.449a1.5 1.5 0 01-1.301.755z" />
  );

export default SvgGraphStatsCircle;
