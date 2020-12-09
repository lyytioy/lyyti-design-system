import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileAward = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-award_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-award_svg__a"
      d="M21.417 17.713l.791 5.146a.556.556 0 01-.825.566l-1.917-1.1-.466-.261-2.383 1.362a.556.556 0 01-.825-.567l.791-5.146"
    />,
    <path
      className="common-file-award_svg__a"
      d="M22.79 14.332a1.933 1.933 0 00-1.89-3.282 1.933 1.933 0 00-3.79 0 1.933 1.933 0 00-1.895 3.282 1.933 1.933 0 001.895 3.282 1.933 1.933 0 003.79 0 1.933 1.933 0 001.895-3.282z"
    />,
    <circle
      className="common-file-award_svg__a"
      cx={19}
      cy={14.332}
      r={1.667}
    />,
    <path
      className="common-file-award_svg__a"
      d="M13.556 23.5h-12a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.263 4.5a1 1 0 01.293.707V7.5"
    />
  );

export default SvgCommonFileAward;
