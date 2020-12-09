import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyOops = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-oops_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-oops_svg__a"
      d="M5.228 3.016a11.252 11.252 0 0113.544 0M22.972 9.5a11.25 11.25 0 11-21.944 0M9.75 18.75h4.5M10.5 13.5L9.75 15M13.5 13.5l.75 1.5M7.125 6.75a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle className="smiley-oops_svg__a" cx={5.625} cy={7.875} r={4.875} />,
    <path
      className="smiley-oops_svg__a"
      d="M19.875 6.75a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle className="smiley-oops_svg__a" cx={18.375} cy={7.875} r={4.875} />
  );

export default SvgSmileyOops;
