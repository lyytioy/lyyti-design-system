import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyCrazy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-crazy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-crazy_svg__a"
      d="M14.5 19.806a5.017 5.017 0 002.339-3.052 1 1 0 00-.968-1.254H8.129a1 1 0 00-.968 1.254A5.017 5.017 0 009.5 19.806"
    />,
    <path
      className="smiley-crazy_svg__a"
      d="M14.5 21a2.5 2.5 0 01-5 0v-2.5a1 1 0 011-1h3a1 1 0 011 1zM16.5 22.585a11.5 11.5 0 10-9 0M14.5 9.608a2.359 2.359 0 014 0"
    />,
    <circle className="smiley-crazy_svg__a" cx={7} cy={9} r={2.5} />,
    <path
      className="smiley-crazy_svg__a"
      d="M7 8.75a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgSmileyCrazy;
