import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphImageRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-image-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="paragraph-image-right_svg__a"
      x={0.5}
      y={0.498}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="paragraph-image-right_svg__a"
      d="M6.5 6.498h4M3.5 10.498h7M3.5 14.498h17M3.5 18.498h12"
    />,
    <rect
      className="paragraph-image-right_svg__a"
      x={13.5}
      y={4.498}
      width={7}
      height={7}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgParagraphImageRight;
