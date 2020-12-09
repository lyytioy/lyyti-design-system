import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-upload_svg__a"
      d="M7.5 8.25H5.25a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5H16.5M20.249 23.25H3.751a1.5 1.5 0 01-1.4-2.026l.953-3a1.5 1.5 0 011.4-.974h14.42a1.5 1.5 0 011.4.974l1.125 3a1.5 1.5 0 01-1.4 2.026zM10.501 20.25h3M12.001 12.75v-12M9.001 3.75l3-3 3 3"
    />
  );

export default SvgLaptopUpload;
