import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveDirection = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-direction_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="cursor-move-direction_svg__a"
      cx={12}
      cy={11.998}
      r={11.25}
    />,
    <circle
      className="cursor-move-direction_svg__a"
      cx={12}
      cy={11.998}
      r={3}
    />,
    <path
      className="cursor-move-direction_svg__a"
      d="M5.133 10.614L3.75 11.998l1.383 1.383M10.616 18.864L12 20.248l1.383-1.384M13.383 5.131L12 3.748l-1.384 1.383M18.866 13.381l1.384-1.383-1.384-1.384"
    />
  );

export default SvgCursorMoveDirection;
