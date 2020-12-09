import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationDownCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-down-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-down-circle_svg__a"
      cx={12}
      cy={11.998}
      r={11}
    />,
    <path
      className="navigation-down-circle_svg__a"
      d="M12 5.998v13M7.5 14.498l4.5 4.5 4.5-4.5"
    />
  );

export default SvgNavigationDownCircle;
