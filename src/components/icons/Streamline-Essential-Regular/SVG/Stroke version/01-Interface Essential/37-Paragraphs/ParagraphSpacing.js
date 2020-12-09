import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphSpacing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-spacing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-spacing_svg__a"
      d="M3.75 23.248V.748M.75 3.748l3-3 3 3M.75 20.248l3 3 3-3M23.25.748h-7.5M23.25 5.248h-12M23.25 9.748h-12M23.25 14.248h-7.5M23.25 18.748h-12M23.25 23.248h-12"
    />
  );

export default SvgParagraphSpacing;
