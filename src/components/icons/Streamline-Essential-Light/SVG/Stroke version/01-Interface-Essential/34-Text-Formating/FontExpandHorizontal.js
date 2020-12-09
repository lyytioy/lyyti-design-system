import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFontExpandHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".font-expand-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="font-expand-horizontal_svg__a"
      d="M21.5 13.498l2-2H17M21.5 9.498l2 2M2.5 13.498l-2-2H7M2.5 9.498l-2 2M6.875 18.5l4.652-13.617a.5.5 0 01.946 0L17.125 18.5M5 18.498h4M15 18.498h4M8.925 12.498h6.15"
    />
  );

export default SvgFontExpandHorizontal;
