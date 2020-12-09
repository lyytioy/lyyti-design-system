import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="remove-circle_svg__a" cx={11.999} cy={12} r={11} />,
    <path
      className="remove-circle_svg__a"
      d="M16.241 7.758l-8.485 8.485M16.241 16.243L7.756 7.758"
    />
  );

export default SvgRemoveCircle;
