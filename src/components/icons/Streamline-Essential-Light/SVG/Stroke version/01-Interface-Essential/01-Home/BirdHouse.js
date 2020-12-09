import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBirdHouse = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bird-house_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="bird-house_svg__a"
      d="M2.369 9.293l2.449 13.224A1.251 1.251 0 006 23.5h12a1.251 1.251 0 001.182-.983l2.449-13.224"
    />,
    <path className="bird-house_svg__a" d="M.5 11L12 .5 23.5 11" />,
    <circle className="bird-house_svg__a" cx={12} cy={14} r={2.5} />
  );

export default SvgBirdHouse;
