import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove-button_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="remove-button_svg__a"
      x={0.5}
      y={5.999}
      width={23}
      height={12}
      rx={1}
      ry={1}
    />,
    <path
      className="remove-button_svg__a"
      d="M14.5 8.999l6 6M20.5 8.999l-6 6"
    />
  );

export default SvgRemoveButton;
