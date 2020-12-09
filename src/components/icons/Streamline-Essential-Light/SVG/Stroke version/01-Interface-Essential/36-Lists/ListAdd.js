import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgListAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".list-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="list-add_svg__a"
      d="M4.5 2.498h14M4.5 7.498h14M4.5 12.498h6M4.5 17.498h6M.5 2.498h1M.5 7.498h1M.5 12.498h1M.5 17.498h1"
    />,
    <circle className="list-add_svg__a" cx={18.5} cy={18.498} r={5} />,
    <path className="list-add_svg__a" d="M21 18.498h-5M18.5 20.998v-5" />
  );

export default SvgListAdd;
