import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScissors = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scissors_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="scissors_svg__a" cx={20} cy={17.999} r={3.5} />,
    <circle className="scissors_svg__a" cx={20} cy={5.999} r={3.5} />,
    <path
      className="scissors_svg__a"
      d="M16.5 18a11 11 0 00-11-11c-1.125 0-4.164.37-5 1l14.221 4L.5 16c.836.628 3.875 1 5 1a11 11 0 0011-11"
    />
  );

export default SvgScissors;
