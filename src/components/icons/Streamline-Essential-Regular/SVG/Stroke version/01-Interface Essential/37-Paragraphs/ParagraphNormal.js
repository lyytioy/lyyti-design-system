import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphNormal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-normal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="paragraph-normal_svg__a"
      x={0.75}
      y={0.748}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="paragraph-normal_svg__a"
      d="M9.75 5.248h9M5.25 14.248h13.5M5.25 9.748h13.5M5.25 18.748h7.5"
    />
  );

export default SvgParagraphNormal;
