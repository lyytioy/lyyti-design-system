import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-refresh_svg__a"
      d="M19 15.5h4.5V11M23.158 15.5a6 6 0 10-.968 5.742M20.5 9.5V2.167A1.667 1.667 0 0018.833.5H5.167A1.667 1.667 0 003.5 2.167V13.5M9.5 17.5H5.623a5.281 5.281 0 01-5.123-4h10"
    />
  );

export default SvgLaptopRefresh;
