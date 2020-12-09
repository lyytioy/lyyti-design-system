import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyBlush = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-blush_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-blush_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-blush_svg__a"
      d="M8.5 7.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.5 7.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M9 18.5a4.38 4.38 0 013-1 4.38 4.38 0 013 1M14.5 14l2-2M17.5 14l2-2M4.5 14l2-2M7.5 14l2-2"
    />
  );

export default SvgSmileyBlush;
