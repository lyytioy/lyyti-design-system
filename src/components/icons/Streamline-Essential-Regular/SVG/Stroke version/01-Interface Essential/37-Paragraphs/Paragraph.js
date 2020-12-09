import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="paragraph_svg__a"
      d="M11.25.748v22.5M17.25.748v22.5M11.25 14.248H7.5a6.75 6.75 0 010-13.5h15.75"
    />
  );

export default SvgParagraph;
