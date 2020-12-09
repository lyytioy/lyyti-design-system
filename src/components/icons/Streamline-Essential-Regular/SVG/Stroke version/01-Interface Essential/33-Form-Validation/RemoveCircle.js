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
    <circle className="remove-circle_svg__a" cx={12} cy={11.999} r={11.25} />,
    <path
      className="remove-circle_svg__a"
      d="M7.5 16.499l9-9M16.5 16.499l-9-9"
    />
  );

export default SvgRemoveCircle;
