import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiScreenSplit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-screen-split_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="ui-screen-split_svg__a"
      x={0.5}
      y={1}
      width={23}
      height={18}
      rx={1}
      ry={1}
    />,
    <path
      className="ui-screen-split_svg__a"
      d="M5.5 19h13v2a2 2 0 01-2 2h-9a2 2 0 01-2-2v-2z"
    />,
    <path
      className="ui-screen-split_svg__a"
      d="M10.5 20.5l1.5 1 1.5-1M.5 7h23M.5 13h23"
    />
  );

export default SvgUiScreenSplit;
