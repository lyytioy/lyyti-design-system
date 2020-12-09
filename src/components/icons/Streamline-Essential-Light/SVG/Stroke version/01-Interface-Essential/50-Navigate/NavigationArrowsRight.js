import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationArrowsRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-arrows-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-arrows-right_svg__a"
      d="M7.5 7.6V2.291a.5.5 0 01.87-.336l8.824 9.706a.5.5 0 010 .673L8.37 22.041a.5.5 0 01-.87-.341v-5.3"
    />,
    <path
      className="navigation-arrows-right_svg__a"
      d="M1.5 21.7V2.291a.5.5 0 01.87-.336l8.824 9.706a.5.5 0 010 .673L2.37 22.041a.5.5 0 01-.87-.341zM13.5 7.6V2.291a.5.5 0 01.87-.336l8.824 9.706a.5.5 0 010 .673l-8.824 9.707a.5.5 0 01-.87-.337V16.4"
    />
  );

export default SvgNavigationArrowsRight;
