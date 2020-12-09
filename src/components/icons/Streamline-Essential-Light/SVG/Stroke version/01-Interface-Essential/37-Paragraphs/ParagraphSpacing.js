import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphSpacing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-spacing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-spacing_svg__a"
      d="M3.5.498v23M.5 3.498l3-3 3 3M.5 20.498l3 3 3-3M23.5.498h-10M23.5 4.498h-13M23.5 8.498h-13M23.5 14.498h-10M23.5 18.498h-13M23.5 22.498h-13"
    />
  );

export default SvgParagraphSpacing;
