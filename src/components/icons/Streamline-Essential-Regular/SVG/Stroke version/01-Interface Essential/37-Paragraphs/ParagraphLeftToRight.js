import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphLeftToRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-left-to-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-left-to-right_svg__a"
      d="M23.25 18.749H.75M18.75 14.249l4.5 4.5-4.5 4.5M9.75.749v15M14.25.749v15M18.75.749h-12a4.5 4.5 0 000 9h3"
    />
  );

export default SvgParagraphLeftToRight;
