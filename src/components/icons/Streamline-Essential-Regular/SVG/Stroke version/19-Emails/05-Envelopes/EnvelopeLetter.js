import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopeLetter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".envelope-letter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="envelope-letter_svg__a"
      x={0.75}
      y={4.5}
      width={22.5}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="envelope-letter_svg__a"
      d="M4.5 13.5h3.75M4.5 16.5h8.25"
    />,
    <rect
      className="envelope-letter_svg__a"
      x={15.75}
      y={7.5}
      width={4.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgEnvelopeLetter;
