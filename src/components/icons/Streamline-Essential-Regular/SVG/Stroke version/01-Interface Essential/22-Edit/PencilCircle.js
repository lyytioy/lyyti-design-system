import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPencilCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pencil-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="pencil-circle_svg__a"
      d="M9.746 17.435l-3.712.531.53-3.713 7.561-7.561a2.25 2.25 0 013.182 3.182z"
    />,
    <circle className="pencil-circle_svg__a" cx={12} cy={12} r={11.25} />
  );

export default SvgPencilCircle;
