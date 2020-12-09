import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphIndent = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-indent_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-indent_svg__a"
      d="M23.5 22.498H.5M23.5 17.498H.5M23.5 12.498H9M23.5 7.498H9M23.5 2.498H9M3 10.498l3-3-3-3"
    />
  );

export default SvgParagraphIndent;
