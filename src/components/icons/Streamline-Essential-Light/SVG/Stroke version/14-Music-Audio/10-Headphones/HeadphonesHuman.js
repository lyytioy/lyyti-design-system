import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphonesHuman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-human_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="headphones-human_svg__a"
      d="M10.1 1.578c-4.865.61-9 4.708-9 9.672a9.725 9.725 0 004 7.861V23.5M15.1 23.5v-2h2a3 3 0 003-3v-3h2.311a.5.5 0 00.474-.654C20.97 8.932 19.6 2.571 13.1 1.621"
    />,
    <rect
      className="headphones-human_svg__a"
      x={10.095}
      y={0.5}
      width={3}
      height={9}
      rx={1}
      ry={1}
      transform="rotate(-180 11.595 5)"
    />,
    <circle className="headphones-human_svg__a" cx={11.595} cy={13} r={1.5} />,
    <path
      className="headphones-human_svg__a"
      d="M10.125 8.745a4.5 4.5 0 102.939 0"
    />
  );

export default SvgHeadphonesHuman;
