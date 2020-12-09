import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="laptop-remove_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="laptop-remove_svg__a"
      d="M19.5 15L15 19.5M15 15l4.5 4.5M3 12V2.25A1.5 1.5 0 014.5.75h15a1.5 1.5 0 011.5 1.5v6M9.75 12h-9a3.75 3.75 0 003.75 3.75h3.75"
    />
  );

export default SvgLaptopRemove;
