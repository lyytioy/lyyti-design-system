import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyNoseBlow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-nose-blow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-nose-blow_svg__a"
      d="M4.535 23.163a1.134 1.134 0 001.478-.6l3.657-8.358a.95.95 0 00-.2-1.053.856.856 0 00-1.025-.142l-7.11 3.98a1.141 1.141 0 00-.383 1.644A1.375 1.375 0 002 19.22a1.271 1.271 0 000 1.836 1.271 1.271 0 001.836 0s-.62 1.557.699 2.107z"
    />,
    <path
      className="smiley-nose-blow_svg__a"
      d="M.849 13.5A11.406 11.406 0 01.75 12a11.238 11.238 0 119.1 11.044"
    />,
    <path
      className="smiley-nose-blow_svg__a"
      d="M6.75 6.75l3 3H6M17.25 6.75l-3 3H18M9.453 14.703L12 17.25 14.25 15l2.25 2.25"
    />
  );

export default SvgSmileyNoseBlow;
