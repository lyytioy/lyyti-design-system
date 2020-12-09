import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyDrool = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-drool_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-drool_svg__a"
      d="M16.5 18a7.468 7.468 0 002.85-4.5H4.65a7.507 7.507 0 005.937 5.867M8.215 22.6a11.254 11.254 0 1111.716-2.619M9.75 6.834a3.689 3.689 0 00-4.018 1.934M14.25 6.834a3.689 3.689 0 014.018 1.934"
    />,
    <path
      className="smiley-drool_svg__a"
      d="M11.807 18.347a1.6 1.6 0 00-1.307 1.51v.679a1.434 1.434 0 001.5 1.357 1.434 1.434 0 001.5-1.357v1.357a1.508 1.508 0 003 0v-4.754a.636.636 0 00-.391-.572.768.768 0 00-.74.062 11.268 11.268 0 01-3.562 1.718z"
    />
  );

export default SvgSmileyDrool;
