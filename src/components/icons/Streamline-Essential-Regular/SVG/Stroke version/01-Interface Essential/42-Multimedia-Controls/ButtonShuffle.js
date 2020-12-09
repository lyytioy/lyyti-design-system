import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonShuffle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-shuffle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-shuffle_svg__a"
      d="M10.1 9A5.617 5.617 0 006 6.748H.75M23.25 6.748H18c-3.75 0-6 5.25-6 5.25s-2.25 5.25-6 5.25H.75M13.9 15a5.61 5.61 0 004.1 2.248h5.25"
    />,
    <path
      className="button-shuffle_svg__a"
      d="M20.25 3.748l3 3-3 3M20.25 14.248l3 3-3 3"
    />
  );

export default SvgButtonShuffle;
