import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-edit_svg__a"
      d="M22.88 15.119l-7.63 7.631-3.75.75.75-3.75 7.63-7.631a2.116 2.116 0 012.992 0l.008.009a2.113 2.113 0 010 2.991zM20.5 9.5V2.167A1.667 1.667 0 0018.833.5H5.167A1.667 1.667 0 003.5 2.167V13.5"
    />,
    <path
      className="laptop-edit_svg__a"
      d="M11.5 17.5H5.623a5.281 5.281 0 01-5.123-4h14"
    />
  );

export default SvgLaptopEdit;
