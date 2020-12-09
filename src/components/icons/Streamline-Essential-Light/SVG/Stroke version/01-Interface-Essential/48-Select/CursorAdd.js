import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-add_svg__a"
      d="M5.211 8.567a.5.5 0 01-.933.1L.553 1.221A.5.5 0 011.224.55l7.449 3.725a.5.5 0 01-.1.933l-2.692.672z"
    />,
    <circle className="cursor-add_svg__a" cx={15} cy={14.966} r={8} />,
    <path className="cursor-add_svg__a" d="M15 10.966v8M19 14.966h-8" />
  );

export default SvgCursorAdd;
