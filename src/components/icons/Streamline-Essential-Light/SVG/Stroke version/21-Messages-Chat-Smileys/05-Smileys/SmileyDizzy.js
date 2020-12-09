import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyDizzy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-dizzy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-dizzy_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-dizzy_svg__a"
      d="M7.5 15.5h9M12.5 15.5v3a1.5 1.5 0 003 0v-3M7 11a2.5 2.5 0 010-5 2 2 0 012 2 1 1 0 01-2 0M17 11a2.5 2.5 0 010-5 2 2 0 012 2 1 1 0 01-2 0"
    />
  );

export default SvgSmileyDizzy;
