import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cloud-disable_svg__a" cx={17.249} cy={17.251} r={6} />,
    <path
      className="cloud-disable_svg__a"
      d="M13.007 21.492l8.484-8.484M23.1 9.659a4.87 4.87 0 00-7.49-2.794 7.5 7.5 0 10-7.361 8.886"
    />
  );

export default SvgCloudDisable;
