import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphImageLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-image-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-image-left_svg__a"
      d="M13.5 5.248h9.75M13.5.748h9.75M13.5 9.748h9.75M.75 14.248h22.5M.75 18.748h22.5M.75 23.248h16.5"
    />,
    <rect
      className="paragraph-image-left_svg__a"
      x={0.75}
      y={0.748}
      width={9}
      height={9}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgParagraphImageLeft;
