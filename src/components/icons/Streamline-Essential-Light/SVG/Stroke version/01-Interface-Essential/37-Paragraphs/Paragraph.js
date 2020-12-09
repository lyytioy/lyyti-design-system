import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paragraph_svg__a"
      d="M17.5.498v23M10.5.498v23M23.5.5h-17a6 6 0 000 12h4"
    />
  );

export default SvgParagraph;
