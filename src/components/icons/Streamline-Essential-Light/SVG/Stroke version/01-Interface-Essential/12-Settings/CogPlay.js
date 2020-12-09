import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="cog-play_svg__a" cx={12} cy={12.001} r={6} />,
    <path
      className="cog-play_svg__a"
      d="M10.5 9.064v5.937l4.521-3L10.5 9.064z"
    />,
    <path
      className="cog-play_svg__a"
      d="M19.923 7.213a1.874 1.874 0 001.065 2.571l1.265.45a1.875 1.875 0 010 3.534l-1.265.45a1.874 1.874 0 00-1.065 2.571L20.5 18a1.874 1.874 0 01-2.5 2.5l-1.213-.576a1.874 1.874 0 00-2.571 1.065l-.45 1.265a1.875 1.875 0 01-3.534 0l-.45-1.265a1.874 1.874 0 00-2.571-1.065L6 20.5A1.874 1.874 0 013.5 18l.576-1.213a1.874 1.874 0 00-1.065-2.571l-1.265-.45a1.875 1.875 0 010-3.534l1.265-.45a1.874 1.874 0 001.066-2.569L3.5 6A1.874 1.874 0 016 3.5l1.213.576a1.874 1.874 0 002.57-1.063l.45-1.265a1.875 1.875 0 013.534 0l.45 1.265a1.874 1.874 0 002.571 1.065L18 3.5A1.874 1.874 0 0120.5 6z"
    />
  );

export default SvgCogPlay;
