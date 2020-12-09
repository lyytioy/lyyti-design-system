import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonShuffle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-shuffle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="button-shuffle_svg__a"
      d="M10.5 10S9 6.5 6 6.5H.5M23.5 6.5H18c-5 0-7 11-12 11H.5M13 14.5s2 3 5 3h5.5"
    />,
    <path
      className="button-shuffle_svg__a"
      d="M21.5 3.499l2 3-2 3M21.5 14.499l2 3-2 3"
    />
  );

export default SvgButtonShuffle;
