import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelectHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-select-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-select-heart_svg__a"
      d="M11.213 19.466l-1.62-1.688M7.432 15.527l-1.62-1.689M3.651 11.587c-.534-.569-1.093-1.114-1.607-1.7M.805 7.054a5.571 5.571 0 01.167-2.329M2.594 2.1a5.752 5.752 0 012-1.167M7.651.756a5.362 5.362 0 012.107.952M14.261 1.7A5.333 5.333 0 0116.39.747M19.469.95a5.718 5.718 0 012 1.206M23.06 4.83a5.707 5.707 0 01.123 2.352M21.861 10.004l-1.628 1.707M16.684 23.034c-.064.265-.2.273-.293.018L12.5 12.818c-.1-.255.032-.385.287-.289l10.277 3.854c.255.1.247.228-.017.294l-5.121 1.28z"
    />
  );

export default SvgCursorSelectHeart;
