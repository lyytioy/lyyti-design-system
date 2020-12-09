import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cloud-check_svg__a" cx={17.249} cy={17.251} r={6} />,
    <path
      className="cloud-check_svg__a"
      d="M19.923 15.506l-2.9 3.874a.75.75 0 01-1.13.08l-1.5-1.5M23.1 9.659a4.87 4.87 0 00-7.49-2.794 7.5 7.5 0 10-7.361 8.886"
    />
  );

export default SvgCloudCheck;
