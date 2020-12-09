import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-flag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="signal-flag_svg__a" cx={12.75} cy={3.375} r={2.625} />,
    <path
      className="signal-flag_svg__a"
      d="M12.75 17.25v4.5M16.8 7.5a3 3 0 002.069-.827l1.82-1.734a1.5 1.5 0 012.122 2.122L20.385 9.58a3 3 0 01-2.161.92h-2.467l-.007 11.25a1.5 1.5 0 01-3 0 1.5 1.5 0 01-3 0V10.5h-4.5a1.5 1.5 0 010-3z"
    />,
    <path
      className="signal-flag_svg__a"
      d="M6.75 13.5v.75a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-4.5A.75.75 0 011.5 9h2.25"
    />
  );

export default SvgSignalFlag;
