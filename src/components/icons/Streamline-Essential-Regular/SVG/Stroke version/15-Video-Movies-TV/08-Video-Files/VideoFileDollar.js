import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileDollar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-dollar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-file-dollar_svg__a"
      d="M18.75 14.25h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H15.75M17.25 14.25v-.75M17.25 21v-.75"
    />,
    <circle className="video-file-dollar_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="video-file-dollar_svg__a"
      d="M8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />,
    <path
      className="video-file-dollar_svg__a"
      d="M6.241 12.678a.685.685 0 01-.991-.613v-4.63a.685.685 0 01.991-.613l4.631 2.316a.684.684 0 010 1.224z"
    />
  );

export default SvgVideoFileDollar;
