import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shield-check_svg__a"
      d="M17.5 7l-6.035 8.732-4.578-4.58"
    />,
    <path
      className="shield-check_svg__a"
      d="M2 3.775v7.637A12.285 12.285 0 009.828 22.88l1.067.414a3.063 3.063 0 002.21 0l1.067-.414A12.285 12.285 0 0022 11.412V3.775a1.536 1.536 0 00-.89-1.406A22.143 22.143 0 0012 .5a22.143 22.143 0 00-9.11 1.869A1.536 1.536 0 002 3.775z"
    />
  );

export default SvgShieldCheck;
