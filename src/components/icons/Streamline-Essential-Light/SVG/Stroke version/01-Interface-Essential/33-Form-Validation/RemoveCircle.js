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
    <path
      className="remove-circle_svg__a"
      d="M7 16.999l10-10M17 16.999l-10-10"
    />,
    <circle className="remove-circle_svg__a" cx={12} cy={11.999} r={11.5} />
  );

export default SvgRemoveCircle;
