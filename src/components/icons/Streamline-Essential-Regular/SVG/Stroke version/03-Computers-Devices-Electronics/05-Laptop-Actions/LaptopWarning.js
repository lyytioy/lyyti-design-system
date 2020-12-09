import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-warning_svg__a"
      d="M17.25 20.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M17.25 18v-3"
    />,
    <path
      className="laptop-warning_svg__a"
      d="M23.063 20.682a1.774 1.774 0 01-1.587 2.568h-8.452a1.774 1.774 0 01-1.587-2.568l4.226-8.451a1.774 1.774 0 013.174 0zM3 12V2.25A1.5 1.5 0 014.5.75h15a1.5 1.5 0 011.5 1.5v6"
    />,
    <path
      className="laptop-warning_svg__a"
      d="M11.25 12H.75a3.75 3.75 0 003.75 3.75h5.25"
    />
  );

export default SvgLaptopWarning;
