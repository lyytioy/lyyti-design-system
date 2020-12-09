import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shield-home_svg__a"
      d="M7.5 9.654V16a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V9.654"
    />,
    <path className="shield-home_svg__a" d="M18.5 11.5l-6.5-6-6.5 6" />,
    <path
      className="shield-home_svg__a"
      d="M1.5 3.775v7.637A12.311 12.311 0 009.719 22.88l1.121.414a3.365 3.365 0 002.32 0l1.121-.414A12.311 12.311 0 0022.5 11.412V3.775a1.533 1.533 0 00-.934-1.406A24.237 24.237 0 0012 .5a24.237 24.237 0 00-9.566 1.869A1.533 1.533 0 001.5 3.775z"
    />,
    <path
      className="shield-home_svg__a"
      d="M10.5 16.5V14a1.5 1.5 0 013 0v2.5"
    />
  );

export default SvgShieldHome;
