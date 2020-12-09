import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScissors = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scissors_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="scissors_svg__a" cx={19.5} cy={17.999} r={3.75} />,
    <circle className="scissors_svg__a" cx={19.5} cy={5.999} r={3.75} />,
    <path
      className="scissors_svg__a"
      d="M.751 16.9a19.434 19.434 0 003.716.476A11.23 11.23 0 0015.75 6"
    />,
    <path
      className="scissors_svg__a"
      d="M.751 7.1a19.367 19.367 0 013.716-.477A11.23 11.23 0 0115.75 18"
    />
  );

export default SvgScissors;
