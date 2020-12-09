import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-flash_svg__a"
      d="M20.25 9.75l-5.911 6.882a.376.376 0 00.286.618h2.625v6l5.911-6.882a.376.376 0 00-.286-.618H20.25zM3 12V2.25A1.5 1.5 0 014.5.75h15a1.5 1.5 0 011.5 1.5v4.5M12.75 12h-12a3.75 3.75 0 003.75 3.75h6.75"
    />
  );

export default SvgLaptopFlash;
