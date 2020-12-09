import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyDecode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-decode_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-decode_svg__a"
      d="M6.5 10.25a.25.25 0 11.25-.25.25.25 0 01-.25.25M17.5 10.25a.25.25 0 10-.25-.25.25.25 0 00.25.25M8.5 8.5c-1-2-4-2-4-2M15.5 8.5c1-2 4-2 4-2"
    />,
    <rect
      className="smiley-decode_svg__a"
      x={0.5}
      y={13.5}
      width={23}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="smiley-decode_svg__a"
      d="M2.5 15.5h2v3h-2zM8.5 18.5h-2M7.5 18.5v-3M19.5 15.5l2 3M19.5 18.5l2-3M10.5 18.5l1.5-3 1.5 3"
    />,
    <circle className="smiley-decode_svg__a" cx={16.5} cy={16.5} r={1} />,
    <path
      className="smiley-decode_svg__a"
      d="M16.5 17.5v1M23.489 11.5a11.5 11.5 0 00-22.978 0M7.3 22.5a11.526 11.526 0 009.392 0"
    />
  );

export default SvgSmileyDecode;
