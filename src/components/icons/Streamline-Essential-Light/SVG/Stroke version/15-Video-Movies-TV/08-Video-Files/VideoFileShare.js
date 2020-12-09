import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-share_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="video-file-share_svg__a"
      d="M7.636 8.214a.764.764 0 00-1.136.668v5.736a.764.764 0 001.136.668l4.971-3.059a.765.765 0 000-1.337z"
    />,
    <circle
      className="video-file-share_svg__a"
      cx={13.75}
      cy={18.25}
      r={2.25}
    />,
    <circle
      className="video-file-share_svg__a"
      cx={21.25}
      cy={21.25}
      r={2.25}
    />,
    <circle
      className="video-file-share_svg__a"
      cx={21.25}
      cy={13.75}
      r={2.25}
    />,
    <path
      className="video-file-share_svg__a"
      d="M15.675 17.095l3.65-2.19M15.838 19.085l3.324 1.33"
    />
  );

export default SvgVideoFileShare;
