import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphLeftToRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-left-to-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-left-to-right_svg__a"
      d="M15.508.499v16M10.508.499v16M19.508.5h-12.5a3.5 3.5 0 000 7h3.5M22.492 19.499H1.508M18.508 23.499l3.984-4-3.984-4"
    />
  );

export default SvgParagraphLeftToRight;
