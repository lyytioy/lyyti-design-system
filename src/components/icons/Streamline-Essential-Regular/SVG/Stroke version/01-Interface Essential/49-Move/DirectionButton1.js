import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDirectionButton1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".direction-button-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="direction-button-1_svg__a"
      d="M21.75 6.748h-3a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-7.5a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 001.5 1.5h7.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <path
      className="direction-button-1_svg__a"
      d="M9.75 5.998L12 3.748l2.25 2.25M14.25 17.998L12 20.248l-2.25-2.25M6 14.248l-2.25-2.25L6 9.748M18 9.748l2.25 2.25-2.25 2.25"
    />
  );

export default SvgDirectionButton1;
