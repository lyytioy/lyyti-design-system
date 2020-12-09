import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingUserHead = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-user-head_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="programming-user-head_svg__a"
      cx={12}
      cy={13.125}
      r={3.375}
    />,
    <path
      className="programming-user-head_svg__a"
      d="M18 23.25a6.054 6.054 0 00-12 0zM1.5.75h.75A.75.75 0 013 1.5v5.25M1.5 6.75h3M1.5 18.75h.75a.75.75 0 01.75.75v3.75M19.5 18.75h.75a.75.75 0 01.75.75v3.75M10.5 5.25a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 013 0zM4.5 14.25a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 013 0zM19.5.75h.75a.75.75 0 01.75.75v5.25M19.5 6.75h3M16.5 5.25a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 013 0zM22.5 14.25a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 013 0z"
    />
  );

export default SvgProgrammingUserHead;
