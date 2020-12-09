import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIndentIncrease = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".indent-increase_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="indent-increase_svg__a"
      d="M.75 2.998h22.5M.75 7.498h12M.75 11.998h12M.75 16.498h12M.75 20.998h22.5M21.97 11.776l-4.939-4.939a.75.75 0 00-1.281.53v9.879a.75.75 0 001.281.53l4.939-4.939a.75.75 0 000-1.061z"
    />
  );

export default SvgIndentIncrease;
