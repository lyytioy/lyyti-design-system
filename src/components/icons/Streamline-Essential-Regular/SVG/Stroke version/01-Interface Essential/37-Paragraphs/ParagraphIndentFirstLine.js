import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphIndentFirstLine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-indent-first-line_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-indent-first-line_svg__a"
      d="M6 10.498l3-3-3-3M12.75 2.998h10.5M12.75 7.498h10.5M12.75 11.998h10.5M3.75 16.498h19.5M3.75 20.998h19.5M.75 7.498H9"
    />
  );

export default SvgParagraphIndentFirstLine;
