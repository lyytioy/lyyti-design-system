import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeStopwatch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 14.5a9.5 9.5 0 1017.006-5.811.249.249 0 01.021-.33l1.651-1.651a1 1 0 10-1.414-1.414L18.108 6.95a.249.249 0 01-.329.021 9.451 9.451 0 00-4.561-1.891.249.249 0 01-.218-.248V2.251A.25.25 0 0113.25 2H15a1 1 0 100-2H9a1 1 0 000 2h1.75a.25.25 0 01.25.25v2.582a.249.249 0 01-.218.248A9.513 9.513 0 002.5 14.5zm2 0A7.5 7.5 0 1112 22a7.508 7.508 0 01-7.5-7.5z" />
  );

export default SvgTimeStopwatch;
