import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgListNumbers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".list-numbers_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="list-numbers_svg__a"
      d="M6.5 4.498h17M6.5 12.498h17M6.5 20.498h17M.5 19.239a1 1 0 11.966 1.261A1 1 0 11.5 21.767M.5 11.5a1 1 0 011-1 1 1 0 011 1 1.428 1.428 0 01-.312.891L.5 14.5h2M.5 2.5H1a.5.5 0 01.5.5v3.5M.5 6.498h2"
    />
  );

export default SvgListNumbers;
