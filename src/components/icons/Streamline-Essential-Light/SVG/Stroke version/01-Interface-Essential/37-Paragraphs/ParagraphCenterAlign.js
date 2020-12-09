import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphCenterAlign = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-center-align_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-center-align_svg__a"
      d="M.5 22.498h23M2.5 2.498h19M3.5 7.498h17M.5 12.498h23M4.5 17.498h15"
    />
  );

export default SvgParagraphCenterAlign;
