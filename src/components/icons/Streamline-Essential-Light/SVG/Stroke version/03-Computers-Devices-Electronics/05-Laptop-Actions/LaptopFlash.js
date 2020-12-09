import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-flash_svg__a"
      d="M20.5 7.5V2.167A1.667 1.667 0 0018.833.5H5.167A1.667 1.667 0 003.5 2.167V13.5M12.5 17.5H5.623a5.281 5.281 0 01-5.123-4h13M20.5 9.5l-5.911 7.382a.376.376 0 00.286.618H17.5v6l5.911-7.382a.376.376 0 00-.286-.618H20.5z"
    />
  );

export default SvgLaptopFlash;
