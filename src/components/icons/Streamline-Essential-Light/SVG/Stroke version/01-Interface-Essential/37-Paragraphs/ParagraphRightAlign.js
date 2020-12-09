import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphRightAlign = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-right-align_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-right-align_svg__a"
      d="M.5 22.498h23M4.5 2.498h19M7.5 7.498h16M.5 12.498h23M4.5 17.498h19"
    />
  );

export default SvgParagraphRightAlign;
