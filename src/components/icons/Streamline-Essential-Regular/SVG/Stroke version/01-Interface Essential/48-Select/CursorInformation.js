import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-information_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="cursor-information_svg__a"
      cx={9.75}
      cy={14.247}
      r={9}
    />,
    <path
      className="cursor-information_svg__a"
      d="M23.25.747h-7.5l7.5 7.5v-7.5zM8.25 12.747h1.5v6M8.25 18.747h3M9.75 9a.375.375 0 10.375.375A.375.375 0 009.75 9"
    />
  );

export default SvgCursorInformation;
