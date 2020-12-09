import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphTwoColumn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-two-column_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="paragraph-two-column_svg__a"
      x={0.75}
      y={0.748}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="paragraph-two-column_svg__a"
      d="M18.75 5.248h-4.5M18.75 9.748h-4.5M17.25 18.748h-3M9.75 5.248h-3M9.75 9.748h-4.5M18.75 14.248h-4.5M9.75 14.248h-4.5M9.75 18.748h-4.5"
    />
  );

export default SvgParagraphTwoColumn;
