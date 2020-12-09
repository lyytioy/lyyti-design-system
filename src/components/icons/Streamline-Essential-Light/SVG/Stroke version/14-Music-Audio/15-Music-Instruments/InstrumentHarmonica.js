import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentHarmonica = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-harmonica_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-harmonica_svg__a"
      d="M.5 13.5h23v3H.5zM5.169 6.5H3.15a1 1 0 00-.914.594L.5 11v.5M18.831 6.5h2.019a1 1 0 01.914.594L23.5 11v.5"
    />,
    <path
      className="instrument-harmonica_svg__a"
      d="M4.5 13.5h3v3h-3zM10.5 13.5h3v3h-3zM16.5 13.5h3v3h-3zM3.5 11.5V11l1.521-4.183A2 2 0 016.9 5.5h10.2a2 2 0 011.88 1.317L20.5 11v.5zM1.5 16.5v.5A1.5 1.5 0 003 18.5h18a1.5 1.5 0 001.5-1.5v-.5M14.5 9.5h3"
    />
  );

export default SvgInstrumentHarmonica;
