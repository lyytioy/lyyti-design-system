import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphImageLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-image-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-image-left_svg__a"
      d="M18 23.498H.5M23.5 19.498H.5M23.5 15.498H.5M23.5 11.498h-9M23.5 7.498h-9M23.5 3.498h-9"
    />,
    <rect
      className="paragraph-image-left_svg__a"
      x={0.5}
      y={0.498}
      width={11}
      height={11}
      rx={1}
      ry={1}
    />
  );

export default SvgParagraphImageLeft;
