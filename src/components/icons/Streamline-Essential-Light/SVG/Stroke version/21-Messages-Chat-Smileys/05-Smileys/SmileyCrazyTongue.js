import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyCrazyTongue = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-crazy-tongue_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-crazy-tongue_svg__a"
      d="M6.5 9.5h1.793a.5.5 0 00.353-.854L7 7M17.5 9.5h-1.793a.5.5 0 01-.353-.854L17 7M14.5 19.806a5.017 5.017 0 002.339-3.052 1 1 0 00-.968-1.254H8.129a1 1 0 00-.968 1.254A5.017 5.017 0 009.5 19.806"
    />,
    <path
      className="smiley-crazy-tongue_svg__a"
      d="M14.5 21a2.5 2.5 0 01-5 0v-2.5a1 1 0 011-1h3a1 1 0 011 1zM16.5 22.585a11.5 11.5 0 10-9 0"
    />
  );

export default SvgSmileyCrazyTongue;
