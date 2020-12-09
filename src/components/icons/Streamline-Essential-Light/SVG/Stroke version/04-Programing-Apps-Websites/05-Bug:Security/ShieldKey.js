import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-key_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shield-key_svg__a"
      d="M1.5 3.775v7.637A12.311 12.311 0 009.719 22.88l1.121.414a3.365 3.365 0 002.32 0l1.121-.414A12.311 12.311 0 0022.5 11.412V3.775a1.533 1.533 0 00-.934-1.406A24.237 24.237 0 0012 .5a24.237 24.237 0 00-9.566 1.869A1.533 1.533 0 001.5 3.775z"
    />,
    <path
      className="shield-key_svg__a"
      d="M18.5 5.5h-2l-4.354 4.354a4 4 0 102 2L18.5 7.5z"
    />,
    <circle className="shield-key_svg__a" cx={10.5} cy={13.5} r={1.25} />
  );

export default SvgShieldKey;
