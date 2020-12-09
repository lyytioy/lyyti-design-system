import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphBullets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-bullets_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="paragraph-bullets_svg__a"
      x={0.75}
      y={0.748}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="paragraph-bullets_svg__a"
      d="M18.75 5.248h-4.5M18.75 9.748h-6M18.75 14.248h-6M17.25 18.748h-4.5M5.25 5.248h4.5v4.5h-4.5zM5.25 14.248h4.5v4.5h-4.5z"
    />
  );

export default SvgParagraphBullets;
