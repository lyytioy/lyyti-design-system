import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphIndentFirstLine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-indent-first-line_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-indent-first-line_svg__a"
      d="M23.5 21.498h-14M23.5 17.498h-14M23.5 13.498h-14M23.5 9.498h-14M23.5 5.498h-11M5.5 2.498l2 3h-6M5.5 8.498l2-3"
    />
  );

export default SvgParagraphIndentFirstLine;
