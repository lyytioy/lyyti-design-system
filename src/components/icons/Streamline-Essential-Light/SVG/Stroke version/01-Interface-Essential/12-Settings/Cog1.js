import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCog1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cog-1_svg__a"
      d="M19.922 7.213a1.874 1.874 0 001.065 2.571l1.265.45a1.875 1.875 0 010 3.534l-1.265.45a1.874 1.874 0 00-1.065 2.571L20.5 18a1.875 1.875 0 01-2.5 2.5l-1.213-.576a1.874 1.874 0 00-2.571 1.065l-.45 1.265a1.875 1.875 0 01-3.533 0l-.45-1.265a1.875 1.875 0 00-2.572-1.065L6 20.5A1.874 1.874 0 013.5 18l.576-1.213a1.874 1.874 0 00-1.065-2.571l-1.265-.45a1.875 1.875 0 010-3.534l1.265-.45a1.874 1.874 0 001.065-2.569L3.5 6A1.874 1.874 0 016 3.5l1.213.576a1.875 1.875 0 002.57-1.063l.45-1.265a1.875 1.875 0 013.533 0l.45 1.265a1.874 1.874 0 002.571 1.065L18 3.5A1.875 1.875 0 0120.5 6z"
    />,
    <circle className="cog-1_svg__a" cx={11.999} cy={12.001} r={4.5} />
  );

export default SvgCog1;
