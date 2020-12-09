import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWalkmanHeadphones = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".walkman-headphones_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="walkman-headphones_svg__a"
      x={7.5}
      y={8.5}
      width={11}
      height={15}
      rx={1}
      ry={1}
    />,
    <path
      className="walkman-headphones_svg__a"
      d="M5.5 15.5a1 1 0 001 1h1v-6h-1a1 1 0 00-1 1zM5.5 13.5h2M9.5 21.5h7"
    />,
    <rect
      className="walkman-headphones_svg__a"
      x={9.5}
      y={10.5}
      width={7}
      height={9}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="walkman-headphones_svg__a"
      d="M13.5 13.25a.25.25 0 10.25.25.249.249 0 00-.25-.25M13.5 16.25a.25.25 0 10.25.25.249.249 0 00-.25-.25M3.5 16.5a1 1 0 01-1 1 1 1 0 01-1-1v-3a1 1 0 011-1 1 1 0 011 1zM22.5 16.5a1 1 0 01-1 1 1 1 0 01-1-1v-3a1 1 0 011-1 1 1 0 011 1z"
    />,
    <path
      className="walkman-headphones_svg__a"
      d="M22.5 15h1v-3a11.5 11.5 0 00-23 0v3h1"
    />
  );

export default SvgWalkmanHeadphones;
