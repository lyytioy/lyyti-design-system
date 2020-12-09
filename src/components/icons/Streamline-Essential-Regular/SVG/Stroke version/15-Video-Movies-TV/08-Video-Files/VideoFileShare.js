import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="video-file-share_svg__a" cx={13.5} cy={18} r={2.25} />,
    <circle className="video-file-share_svg__a" cx={21} cy={21} r={2.25} />,
    <circle className="video-file-share_svg__a" cx={21} cy={13.5} r={2.25} />,
    <path
      className="video-file-share_svg__a"
      d="M15.425 16.845l3.65-2.19M15.588 18.835l3.324 1.33M8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />,
    <path
      className="video-file-share_svg__a"
      d="M6.241 12.678a.685.685 0 01-.991-.613v-4.63a.685.685 0 01.991-.613l4.631 2.316a.684.684 0 010 1.224z"
    />
  );

export default SvgVideoFileShare;
