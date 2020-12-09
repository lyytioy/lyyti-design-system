import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailAt1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".read-email-at-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="read-email-at-1_svg__a" cx={12} cy={12} r={11.5} />,
    <circle className="read-email-at-1_svg__a" cx={12} cy={12} r={3.5} />,
    <path
      className="read-email-at-1_svg__a"
      d="M15.5 18.063A7 7 0 1112 5c9.5 0 9 10.5 5 10.5-1.5 0-1.5-1-1.5-1.5V9"
    />
  );

export default SvgReadEmailAt1;
