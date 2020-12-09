import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphonesHuman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-human_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="headphones-human_svg__a"
      d="M8.714 2.548a8.989 8.989 0 00-2.25 16.5v4.2"
    />,
    <circle
      className="headphones-human_svg__a"
      cx={10.964}
      cy={11.25}
      r={3.75}
    />,
    <path
      className="headphones-human_svg__a"
      d="M13.214 8.25V1.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v6.75"
    />,
    <path
      className="headphones-human_svg__a"
      d="M15.464 23.25v-2.24l1.006.168a3 3 0 003.494-2.959V15.76l.935-.233a1.5 1.5 0 00.884-2.288l-1.819-2.729v-.75c0-3.541-2.868-6.51-6.75-7.3"
    />
  );

export default SvgHeadphonesHuman;
