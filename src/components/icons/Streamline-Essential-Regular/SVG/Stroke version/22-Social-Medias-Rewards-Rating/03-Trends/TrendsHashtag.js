import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTrendsHashtag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".trends-hashtag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="trends-hashtag_svg__a"
      x={5.25}
      y={0.75}
      width={13.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path
      className="trends-hashtag_svg__a"
      d="M5.25 18.75h13.5M21.75 10.5h1.5M21.75 7.5l1.5-.75M21.75 13.5l1.5.75M2.25 10.5H.75M2.25 7.5l-1.5-.75M2.25 13.5l-1.5.75M9.75 8.25H15M9 11.25h5.25M11.25 6.75l-1.5 6M14.25 6.75l-1.5 6"
    />
  );

export default SvgTrendsHashtag;
