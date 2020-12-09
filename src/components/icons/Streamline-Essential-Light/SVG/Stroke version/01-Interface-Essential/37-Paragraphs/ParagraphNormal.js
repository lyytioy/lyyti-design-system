import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphNormal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-normal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="paragraph-normal_svg__a"
      x={0.5}
      y={0.498}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="paragraph-normal_svg__a"
      d="M6.5 5.498h14M3.5 9.498h17M3.5 13.498h17M3.5 17.498h7"
    />
  );

export default SvgParagraphNormal;
