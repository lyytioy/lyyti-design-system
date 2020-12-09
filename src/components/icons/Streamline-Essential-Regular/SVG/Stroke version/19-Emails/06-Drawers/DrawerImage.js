import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="drawer-image_svg__a"
      d="M17.168 15.75a5.951 5.951 0 01-10.336 0H3a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5zM19.5 12.75V2.25A1.5 1.5 0 0018 .75H6a1.5 1.5 0 00-1.5 1.5v10.5"
    />,
    <circle className="drawer-image_svg__a" cx={9} cy={5.25} r={1.5} />,
    <path
      className="drawer-image_svg__a"
      d="M9 12.75l2.55-4.4a1.5 1.5 0 012.4 0l2.55 4.4z"
    />
  );

export default SvgDrawerImage;
