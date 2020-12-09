import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopePostcard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".envelope-postcard_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="envelope-postcard_svg__a"
      x={0.75}
      y={7.5}
      width={22.5}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="envelope-postcard_svg__a"
      d="M2.25 4.5h19.5M4.5 1.5h15M4.5 16.5h3.75M4.5 19.5h8.25"
    />,
    <rect
      className="envelope-postcard_svg__a"
      x={15.75}
      y={10.5}
      width={4.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgEnvelopePostcard;
