import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskHeartDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-heart-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="mask-heart-double_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />,
    <path
      className="mask-heart-double_svg__a"
      d="M8.258 13.346l-3.677-3.9a2.922 2.922 0 01-.532-3.329 2.812 2.812 0 014.543-.749l.783.8.783-.8a2.812 2.812 0 014.543.749 2.916 2.916 0 01.283 1.591"
    />,
    <path
      className="mask-heart-double_svg__a"
      d="M13.875 20.25l-4.794-5.085a2.924 2.924 0 01-.532-3.33 2.812 2.812 0 014.543-.749l.783.8.783-.8a2.812 2.812 0 014.543.749 2.924 2.924 0 01-.532 3.33z"
    />
  );

export default SvgMaskHeartDouble;
