import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphIndentLastLine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-indent-last-line_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-indent-last-line_svg__a"
      d="M17.5 23.498l-4-3.015 4-2.943M.5 22.498h10M.5 2.498h23M.5 6.498h23M.5 10.498h23"
    />,
    <path
      className="paragraph-indent-last-line_svg__a"
      d="M.5 14.5h20a3 3 0 010 6h-7M.5 18.498h10"
    />
  );

export default SvgParagraphIndentLastLine;
