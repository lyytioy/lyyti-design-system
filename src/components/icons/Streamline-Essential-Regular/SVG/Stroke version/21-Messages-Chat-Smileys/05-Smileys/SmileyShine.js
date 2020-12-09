import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyShine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-shine_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-shine_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-shine_svg__a"
      d="M18.366 14.25a.75.75 0 01.707 1 7.5 7.5 0 01-14.146 0 .75.75 0 01.707-1zM7.5 6a8.718 8.718 0 01-2.25 2.625A8.718 8.718 0 017.5 11.25a8.718 8.718 0 012.25-2.625A8.718 8.718 0 017.5 6M16.5 6a8.718 8.718 0 01-2.25 2.625 8.718 8.718 0 012.25 2.625 8.718 8.718 0 012.25-2.625A8.718 8.718 0 0116.5 6"
    />
  );

export default SvgSmileyShine;
