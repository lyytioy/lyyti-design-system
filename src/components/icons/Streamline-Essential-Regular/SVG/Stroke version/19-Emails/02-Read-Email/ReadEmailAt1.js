import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailAt1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".read-email-at-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="read-email-at-1_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="read-email-at-1_svg__a"
      d="M15 18.048A6.751 6.751 0 1118.75 12"
    />,
    <circle className="read-email-at-1_svg__a" cx={12} cy={12} r={3} />,
    <path
      className="read-email-at-1_svg__a"
      d="M15 12v1.125a1.875 1.875 0 003.75 0V12"
    />
  );

export default SvgReadEmailAt1;
