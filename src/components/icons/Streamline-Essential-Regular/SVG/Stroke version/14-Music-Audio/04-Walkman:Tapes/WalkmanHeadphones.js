import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWalkmanHeadphones = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".walkman-headphones_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="walkman-headphones_svg__a"
      d="M11.25 20.25h3M.75 14.25V12a11.25 11.25 0 0122.5 0v2.25"
    />,
    <rect
      className="walkman-headphones_svg__a"
      x={0.75}
      y={12.75}
      width={3}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="walkman-headphones_svg__a"
      x={20.25}
      y={12.75}
      width={3}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="walkman-headphones_svg__a"
      x={8.25}
      y={9.75}
      width={9}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="walkman-headphones_svg__a"
      d="M6.75 12.75h1.5M6.75 15.75h1.5M14.625 16.5a.375.375 0 11-.375.375.375.375 0 01.375-.375M14.625 12.75a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgWalkmanHeadphones;
