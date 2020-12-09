import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWatchTime1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".watch-time-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="watch-time-1_svg__a" cx={11.503} cy={12.501} r={7} />,
    <path
      className="watch-time-1_svg__a"
      d="M11.503 9.501v3l3 3M14.032 5.972l3.721-3.721 4 4-3.721 3.721M4.987 15.064L.8 19.207a1 1 0 00-.3.711V22.5a1 1 0 001 1h2.59a1 1 0 00.705-.292l4.19-4.174"
    />,
    <path
      className="watch-time-1_svg__a"
      d="M17.753 2.251L19.21.794a1 1 0 011.414 0l2.586 2.585a1 1 0 010 1.415l-1.457 1.457M19.753 4.251l2.164-2.164M3.256 20.5a.25.25 0 10.25.25.249.249 0 00-.25-.25zM5 18.751a.25.25 0 10.25.25.249.249 0 00-.25-.25z"
    />
  );

export default SvgWatchTime1;
