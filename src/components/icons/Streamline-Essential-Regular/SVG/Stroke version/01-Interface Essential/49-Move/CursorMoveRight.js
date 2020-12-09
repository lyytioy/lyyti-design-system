import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-move-right_svg__a"
      d="M22.9 11.478l-9.249-3.44a.537.537 0 00-.63.766L14.518 12l-1.493 3.194a.537.537 0 00.63.766l9.249-3.44a.564.564 0 00-.004-1.042zM18.718 17.247a9.75 9.75 0 110-10.5"
    />
  );

export default SvgCursorMoveRight;
