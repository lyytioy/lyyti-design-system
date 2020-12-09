import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyDevastated = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-devastated_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-devastated_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-devastated_svg__a"
      d="M17.25 11.121L14.25 9l3-2.121M6.75 6.879L9.75 9l-3 2.121M18 18a6.752 6.752 0 00-12.1 0"
    />
  );

export default SvgSmileyDevastated;
