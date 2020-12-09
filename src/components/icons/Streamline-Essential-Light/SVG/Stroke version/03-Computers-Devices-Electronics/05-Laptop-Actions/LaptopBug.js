import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopBug = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-bug_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-bug_svg__a"
      d="M20.5 9.5V2.167A1.667 1.667 0 0018.833.5H5.167A1.667 1.667 0 003.5 2.167V13.5M9.5 17.5H5.623a5.281 5.281 0 01-5.123-4h10M14.5 18.5a3 3 0 006 0v-2a3 3 0 00-6 0zM14.5 16.5h6M14.5 18.5h-3M13.5 23.5l2.126-2.657M12.5 11.5l2.632 3.158M20.5 18.5h3M21.5 23.5l-2.126-2.657M22.5 11.5l-2.632 3.158"
    />
  );

export default SvgLaptopBug;
