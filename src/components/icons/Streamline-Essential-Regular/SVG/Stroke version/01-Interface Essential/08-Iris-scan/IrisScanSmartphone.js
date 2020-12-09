import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScanSmartphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan-smartphone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="iris-scan-smartphone_svg__a"
      d="M14.25 14.25v6a3 3 0 01-3 3h-7.5a3 3 0 01-3-3V3.75a3 3 0 013-3h7.5M.75 18.57h13.5"
    />,
    <path
      className="iris-scan-smartphone_svg__a"
      d="M23.25 6.75s-2.25 4.5-6.75 4.5-6.75-4.5-6.75-4.5 2.25-4.5 6.75-4.5 6.75 4.5 6.75 4.5z"
    />,
    <circle
      className="iris-scan-smartphone_svg__a"
      cx={16.5}
      cy={6.75}
      r={2.25}
    />
  );

export default SvgIrisScanSmartphone;
