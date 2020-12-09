import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHyperlinkCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hyperlink-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hyperlink-circle_svg__a"
      d="M15.115 20a8 8 0 11.987-7M8.885 4a8 8 0 11-.985 7"
    />
  );

export default SvgHyperlinkCircle;
