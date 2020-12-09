import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptop1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-1_svg__a"
      d="M8.5 16.5c0 1.1 1.567 2 3.5 2s3.5-.9 3.5-2h5V5.167A1.667 1.667 0 0018.833 3.5H5.167A1.667 1.667 0 003.5 5.167V16.5z"
    />,
    <path
      className="laptop-1_svg__a"
      d="M15.5 16.5c0 1.1-1.567 2-3.5 2s-3.5-.9-3.5-2h-8a5.281 5.281 0 005.123 4h12.754a5.281 5.281 0 005.123-4z"
    />
  );

export default SvgLaptop1;
