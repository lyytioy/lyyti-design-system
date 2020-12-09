import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyMad = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-mad_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="smiley-mad_svg__a" d="M7.5 19a4.5 4.5 0 019 0" />,
    <circle className="smiley-mad_svg__a" cx={12} cy={12} r={11.5} />,
    <path className="smiley-mad_svg__a" d="M6 9l3.5 2M18 9l-3.5 2" />
  );

export default SvgSmileyMad;
