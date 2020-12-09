import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopeLetter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".envelope-letter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="envelope-letter_svg__a"
      x={0.5}
      y={4.5}
      width={23}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="envelope-letter_svg__a"
      d="M16.5 7.5h4v4h-4zM4.5 8.5h2M4.5 13.497h9M4.5 16.5h12"
    />
  );

export default SvgEnvelopeLetter;
