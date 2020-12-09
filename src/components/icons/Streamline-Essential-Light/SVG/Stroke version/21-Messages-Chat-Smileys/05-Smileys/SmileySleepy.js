import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySleepy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-sleepy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-sleepy_svg__a"
      d="M14.5 10.392a2.359 2.359 0 004 0M9.5 10.392a2.359 2.359 0 01-4 0M12 15.5a1.5 1.5 0 00-1.5 1.5v1a1.5 1.5 0 003 0v-1a1.5 1.5 0 00-1.5-1.5zM13.5 4.5h2l-2 2h2M17.5 2.5h2l-2 2h2M21.5.5h2l-2 2h2M15.5 1.046A11.493 11.493 0 1022.1 6.5"
    />
  );

export default SvgSmileySleepy;
