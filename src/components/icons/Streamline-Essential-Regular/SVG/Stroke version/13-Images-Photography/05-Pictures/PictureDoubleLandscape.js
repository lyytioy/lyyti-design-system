import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureDoubleLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-double-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="picture-double-landscape_svg__a"
      d="M18.75 5.25v-.978a2.011 2.011 0 00-2-2.022h-14a2.011 2.011 0 00-2 2.022v9.456a2.011 2.011 0 002 2.022M11.339 21.75l4.439-6.307a1.5 1.5 0 012.357-.128l4.938 5.643M10.875 12.75a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <rect
      className="picture-double-landscape_svg__a"
      x={6}
      y={8.25}
      width={17.25}
      height={13.5}
      rx={1}
      ry={1}
    />
  );

export default SvgPictureDoubleLandscape;
