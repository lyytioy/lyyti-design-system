import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUndo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".undo_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="undo_svg__a" d="M1.5.498v7h7" />,
    <path
      className="undo_svg__a"
      d="M1.5 7.5a11.656 11.656 0 0116.179-2.647 11.508 11.508 0 01.11 18.645"
    />
  );

export default SvgUndo;
