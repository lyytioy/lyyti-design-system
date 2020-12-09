import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationLeftCircle2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-left-circle-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-left-circle-2_svg__a"
      cx={12}
      cy={11.998}
      r={11}
    />,
    <path
      className="navigation-left-circle-2_svg__a"
      d="M10 8h5.5c3 0 4 2.791 4 5a6.994 6.994 0 01-1.5 4v-2.5c0-1-.5-1.5-2.5-1.5H10v1.793a.5.5 0 01-.854.354l-4.293-4.295a.5.5 0 010-.707l4.293-4.293a.5.5 0 01.854.354z"
    />
  );

export default SvgNavigationLeftCircle2;
