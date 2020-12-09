import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyConcerned = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-concerned_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-concerned_svg__a"
      d="M17.5 10.25a.25.25 0 10-.25-.25.25.25 0 00.25.25M18 7l-1.643.986A3.615 3.615 0 0114.5 8.5h-1M6.5 10.25a.25.25 0 11.25-.25.25.25 0 01-.25.25M8.5 7.5a2.5 2.5 0 00-4 0"
    />,
    <circle className="smiley-concerned_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-concerned_svg__a"
      d="M10.5 19.611a6.8 6.8 0 017-3"
    />
  );

export default SvgSmileyConcerned;
