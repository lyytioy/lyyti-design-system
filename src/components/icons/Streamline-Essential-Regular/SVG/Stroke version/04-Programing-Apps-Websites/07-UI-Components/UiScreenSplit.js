import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiScreenSplit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-screen-split_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="ui-screen-split_svg__a" d="M10.5 19.5l1.5.75 1.5-.75" />,
    <rect
      className="ui-screen-split_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={15.75}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="ui-screen-split_svg__a"
      d="M18.75 16.5H5.25v3.75a3 3 0 003 3h7.5a3 3 0 003-3zM.75 6h22.5M.75 11.25h22.5"
    />
  );

export default SvgUiScreenSplit;
