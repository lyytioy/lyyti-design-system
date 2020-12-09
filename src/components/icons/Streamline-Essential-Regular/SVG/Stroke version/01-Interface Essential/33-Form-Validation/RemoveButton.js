import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove-button_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="remove-button_svg__a"
      x={0.75}
      y={5.249}
      width={22.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="remove-button_svg__a"
      d="M15 9.374l5.25 5.25M15 14.624l5.25-5.25"
    />
  );

export default SvgRemoveButton;
