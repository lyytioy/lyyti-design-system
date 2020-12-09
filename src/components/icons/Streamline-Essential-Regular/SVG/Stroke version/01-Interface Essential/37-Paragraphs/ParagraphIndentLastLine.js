import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphIndentLastLine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-indent-last-line_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-indent-last-line_svg__a"
      d="M.75 1.498h22.5M.75 5.998h22.5M.75 10.498h22.5M15.75 16.498l-3 3 3 3"
    />,
    <path
      className="paragraph-indent-last-line_svg__a"
      d="M12.75 19.5H21a2.25 2.25 0 000-4.5h-2.25M12 14.998H.75M.75 19.498h7.5"
    />
  );

export default SvgParagraphIndentLastLine;
