import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyIndifferent = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-indifferent_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-indifferent_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-indifferent_svg__a"
      d="M8.5 7.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.5 7.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M5.5 15.5h13"
    />
  );

export default SvgSmileyIndifferent;
