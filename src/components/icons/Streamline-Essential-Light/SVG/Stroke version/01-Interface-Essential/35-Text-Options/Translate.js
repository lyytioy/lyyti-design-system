import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTranslate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".translate_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="translate_svg__a"
      d="M2.531 4.498H10.5M6.5 2.498v2M9 4.5a8.613 8.613 0 01-6 6M4 4.5a8.613 8.613 0 006 6M14.5 21.5l2.532-6.751a.5.5 0 01.936 0L20.5 21.5M15.25 19.498h4.512"
    />,
    <rect
      className="translate_svg__a"
      x={0.5}
      y={0.498}
      width={12}
      height={12}
      rx={1}
      ry={1}
    />,
    <path
      className="translate_svg__a"
      d="M15 11.5h7.5a1 1 0 011 1v10a1 1 0 01-1 1h-10a1 1 0 01-1-1V15M6 22.998l2-2-2-2"
    />,
    <path
      className="translate_svg__a"
      d="M2 16a5 5 0 005 5h1M18 .998l-2 2 2 2"
    />,
    <path className="translate_svg__a" d="M22 8a5 5 0 00-5-5h-1" />
  );

export default SvgTranslate;
