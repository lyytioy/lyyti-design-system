import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerEnvelope = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-envelope_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="drawer-envelope_svg__a"
      d="M7.695 12.606l7.705.501 4.496-6.277"
    />,
    <path
      className="drawer-envelope_svg__a"
      d="M15.75 18.75l6.642-3.144a1.5 1.5 0 00.714-2L19.9 6.83a1.5 1.5 0 00-2-.714l-9.49 4.492a1.5 1.5 0 00-.714 2L10.6 18.75M2.25 2.25a3 3 0 003 3h9a3 3 0 003-3"
    />,
    <path
      className="drawer-envelope_svg__a"
      d="M2.25 18.75V2.25a1.5 1.5 0 011.5-1.5h12a1.5 1.5 0 011.5 1.5v4.173M9.75 5.25v4.723M21.75 23.25H2.25a1.5 1.5 0 01-1.5-1.5v-3h22.5v3a1.5 1.5 0 01-1.5 1.5z"
    />
  );

export default SvgDrawerEnvelope;
