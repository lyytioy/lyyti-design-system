import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyDizzy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-dizzy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-dizzy_svg__a"
      d="M6.75 15.75h10.5M14.25 18.75a1.5 1.5 0 01-1.5-1.5v-1.5h3v1.5a1.5 1.5 0 01-1.5 1.5zM5.228 3.016a11.252 11.252 0 0113.544 0M22.972 9.5a11.25 11.25 0 11-21.944 0"
    />,
    <circle className="smiley-dizzy_svg__a" cx={5.625} cy={7.875} r={4.875} />,
    <circle className="smiley-dizzy_svg__a" cx={5.625} cy={7.875} r={1.875} />,
    <circle className="smiley-dizzy_svg__a" cx={18.375} cy={7.875} r={1.875} />,
    <circle className="smiley-dizzy_svg__a" cx={18.375} cy={7.875} r={4.875} />
  );

export default SvgSmileyDizzy;
