import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphRightToLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-right-to-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-right-to-left_svg__a"
      d="M.75 18.748h22.5M5.25 14.248l-4.5 4.5 4.5 4.5M12.75.748v15M17.25.748v15M21.75.748h-12a4.5 4.5 0 000 9h3"
    />
  );

export default SvgParagraphRightToLeft;
