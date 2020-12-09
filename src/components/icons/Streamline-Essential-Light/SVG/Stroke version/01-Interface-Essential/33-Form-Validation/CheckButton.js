import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-button_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="check-button_svg__a" d="M12.25 11.499l3 3.5 5.25-6" />,
    <rect
      className="check-button_svg__a"
      x={0.5}
      y={5.999}
      width={23}
      height={12}
      rx={1}
      ry={1}
    />
  );

export default SvgCheckButton;
