import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSlideRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".slide-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="slide-right_svg__a"
      d="M14.25 15.75v4.5a3 3 0 01-3 3h-7.5a3 3 0 01-3-3V3.75a3 3 0 013-3h7.5a3 3 0 013 3v1.494M.75 18.75h13.5M8.25 10.5h7.5"
    />,
    <path className="slide-right_svg__a" d="M12.75 7.5l3 3-3 3" />,
    <circle className="slide-right_svg__a" cx={21} cy={10.5} r={2.25} />
  );

export default SvgSlideRight;
