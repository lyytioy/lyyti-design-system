import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyShine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-shine_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-shine_svg__a"
      d="M17.1 15.256a.5.5 0 01.758.528 6 6 0 01-11.724 0 .5.5 0 01.758-.528A9.292 9.292 0 0012 16.5a9.292 9.292 0 005.1-1.244z"
    />,
    <circle className="smiley-shine_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-shine_svg__a"
      d="M9.5 9.5A2.5 2.5 0 007 12a2.5 2.5 0 00-2.5-2.5A2.5 2.5 0 007 7a2.5 2.5 0 002.5 2.5M19.5 9.5A2.5 2.5 0 0117 7a2.5 2.5 0 01-2.5 2.5A2.5 2.5 0 0117 12a2.5 2.5 0 012.5-2.5"
    />
  );

export default SvgSmileyShine;
