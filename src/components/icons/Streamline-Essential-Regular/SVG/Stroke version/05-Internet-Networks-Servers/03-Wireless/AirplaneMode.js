import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAirplaneMode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".airplane-mode_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="airplane-mode_svg__a"
      d="M.75 23.25L23.25.75M7.132 20.123a1.833 1.833 0 002.592 2.592L12 20.44l2.276 2.275a1.833 1.833 0 002.593-2.592L15 18.254V13.37c5.335 3.774 5.391 4.01 6.293 4.01a1.956 1.956 0 001.3-3.423l-4.671-4.118M15 5.25v-1.5a3 3 0 00-6 0v3.512l-7.588 6.7a1.956 1.956 0 001.3 3.423"
    />
  );

export default SvgAirplaneMode;
