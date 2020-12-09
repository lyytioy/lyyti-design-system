import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-text_svg__a"
      d="M22.949 8.249a5.673 5.673 0 00-9.383-5.835L12 3.979l-1.566-1.565a5.672 5.672 0 10-8.022 8.022L8.223 16.5"
    />,
    <rect
      className="love-it-text_svg__a"
      x={11.25}
      y={11.249}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="love-it-text_svg__a"
      d="M14.25 14.249h6M14.25 17.249h6M14.25 20.249h2.25"
    />
  );

export default SvgLoveItText;
