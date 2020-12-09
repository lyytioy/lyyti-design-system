import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesDiary = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-diary_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="notes-diary_svg__a"
      x={3}
      y={0.75}
      width={18}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="notes-diary_svg__a"
      d="M7.5.75v22.5M18 6.75a1.5 1.5 0 01-1.5 1.5H12a1.5 1.5 0 010-3h4.5a1.5 1.5 0 011.5 1.5z"
    />
  );

export default SvgNotesDiary;
