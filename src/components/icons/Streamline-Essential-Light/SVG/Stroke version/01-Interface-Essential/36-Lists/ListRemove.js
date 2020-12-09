import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgListRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".list-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="list-remove_svg__a"
      d="M4.5 2.498h14M4.5 7.498h14M4.5 12.498h6M4.5 17.498h6"
    />,
    <circle className="list-remove_svg__a" cx={18.5} cy={18.498} r={5} />,
    <path
      className="list-remove_svg__a"
      d="M21 18.498h-5M.5 2.498h1M.5 7.498h1M.5 12.498h1M.5 17.498h1"
    />
  );

export default SvgListRemove;
