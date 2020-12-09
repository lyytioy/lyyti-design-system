import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveDirection = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-direction_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="cursor-move-direction_svg__a"
      cx={12}
      cy={11.998}
      r={11.5}
    />,
    <circle
      className="cursor-move-direction_svg__a"
      cx={12}
      cy={11.998}
      r={3}
    />,
    <path
      className="cursor-move-direction_svg__a"
      d="M4.929 10.584l-1.414 1.414 1.414 1.414M10.586 19.069L12 20.483l1.414-1.414M13.414 4.927L12 3.513l-1.414 1.414M19.071 13.412l1.414-1.414-1.414-1.414"
    />
  );

export default SvgCursorMoveDirection;
