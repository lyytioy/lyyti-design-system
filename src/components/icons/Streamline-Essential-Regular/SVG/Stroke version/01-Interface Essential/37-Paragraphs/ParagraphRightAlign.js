import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphRightAlign = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-right-align_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-right-align_svg__a"
      d="M23 2.998H2M23 7.498H5M23 11.998H.5M23 16.498H5M23 20.998H2"
    />
  );

export default SvgParagraphRightAlign;
