import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileTextStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-text-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-text-star_svg__a"
      d="M17.947 11.68L19.488 15h3a.735.735 0 01.518 1.283l-2.6 2.563 1.442 3.313a.786.786 0 01-1.119.982l-3.489-1.958-3.487 1.961a.786.786 0 01-1.119-.982l1.443-3.313-2.6-2.563A.734.734 0 0111.988 15h3l1.544-3.323a.8.8 0 011.415.003zM3.75 6.75h10.5M3.75 11.25h7.5M3.75 15.75H7.5M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V7.5"
    />
  );

export default SvgCommonFileTextStar;
