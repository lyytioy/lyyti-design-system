import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileBookmark = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-bookmark_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-bookmark_svg__a"
      d="M11.5.5V13L9 10.5 6.5 13V.5"
    />,
    <path
      className="common-file-bookmark_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293z"
    />
  );

export default SvgCommonFileBookmark;
