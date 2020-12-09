import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphRightToLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-right-to-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-right-to-left_svg__a"
      d="M14.516.498v16M9.516.498v16M18.516.5h-12.5a3.5 3.5 0 000 7h3.5M.53 19.498h20.985M4.515 23.498l-3.985-4 3.985-4"
    />
  );

export default SvgParagraphRightToLeft;
