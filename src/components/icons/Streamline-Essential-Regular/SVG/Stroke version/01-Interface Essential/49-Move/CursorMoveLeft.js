import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-move-left_svg__a"
      d="M1.1 12.518l9.249 3.44a.537.537 0 00.63-.766L9.482 12l1.493-3.2a.538.538 0 00-.63-.767L1.1 11.478a.564.564 0 000 1.04zM5.282 6.749a9.75 9.75 0 110 10.5"
    />
  );

export default SvgCursorMoveLeft;
