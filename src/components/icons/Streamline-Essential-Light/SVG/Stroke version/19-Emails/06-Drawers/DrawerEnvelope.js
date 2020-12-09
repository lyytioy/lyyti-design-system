import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerEnvelope = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-envelope_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="drawer-envelope_svg__a"
      d="M22.5 21.5a2 2 0 01-2 2h-17a2 2 0 01-2-2v-4h21zM17.5.5L15 3c-.38.469-1.556.5-1.556.5H7.556S6.38 3.469 6 3L3.5.5"
    />,
    <path
      className="drawer-envelope_svg__a"
      d="M3.5 17.5V.5h14V6M10.5 3.531V9"
    />,
    <path
      className="drawer-envelope_svg__a"
      d="M11.044 17.5l-1.888-4.533a1.064 1.064 0 01.573-1.393l9.836-4.1a1.067 1.067 0 011.394.574l2.459 5.9a1.066 1.066 0 01-.574 1.393L17.669 17.5"
    />,
    <path
      className="drawer-envelope_svg__a"
      d="M9.36 13.459l5.865.213a2.132 2.132 0 001.961-.817l3.978-4.314M23.5 17.5H.5"
    />
  );

export default SvgDrawerEnvelope;
