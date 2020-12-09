import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="remove-circle_svg__a"
      d="M15.182 8.818l-6.364 6.363M8.818 8.818l6.364 6.363"
    />,
    <circle className="remove-circle_svg__a" cx={12} cy={12} r={11.25} />
  );

export default SvgRemoveCircle;
