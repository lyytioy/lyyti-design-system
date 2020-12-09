import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyOops = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-oops_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-oops_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-oops_svg__a"
      d="M9.5 18.5h5M10.5 12.5l.5-1M13.5 12.5l-.5-1M7.737 7.616a.25.25 0 110-.353.249.249 0 010 .353"
    />,
    <circle className="smiley-oops_svg__a" cx={6.5} cy={8.5} r={3} />,
    <path
      className="smiley-oops_svg__a"
      d="M18.737 7.616a.25.25 0 110-.353.249.249 0 010 .353"
    />,
    <circle className="smiley-oops_svg__a" cx={17.5} cy={8.5} r={3} />
  );

export default SvgSmileyOops;
