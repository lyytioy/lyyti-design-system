import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopeUps = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".envelope-ups_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="envelope-ups_svg__a"
      d="M.75 23.25v-21a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v21M10.5 23v-7.5"
    />,
    <path
      className="envelope-ups_svg__a"
      d="M10.5 15.5h.75a2.25 2.25 0 010 4.5h-.75M4.5 15.5v6a1.5 1.5 0 003 0v-6M19.5 15.5H18a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5A1.5 1.5 0 0118 23h-1.5M12 6h7.5M12 9h5.25M4.5 5.25H9v4.5H4.5z"
    />
  );

export default SvgEnvelopeUps;
