import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-double_svg__a"
      d="M13.422 16.608l1.05 2.292a.8.8 0 001.472-.144l1.793-4.943 4.944-1.794a.8.8 0 00.144-1.472L9.442 4.42"
    />,
    <path
      className="cursor-double_svg__a"
      d="M.845 5.8l6.127 13.381a.8.8 0 001.472-.144l1.793-4.943 4.944-1.794a.8.8 0 00.144-1.472L1.942 4.7A.841.841 0 00.845 5.8z"
    />
  );

export default SvgCursorDouble;
