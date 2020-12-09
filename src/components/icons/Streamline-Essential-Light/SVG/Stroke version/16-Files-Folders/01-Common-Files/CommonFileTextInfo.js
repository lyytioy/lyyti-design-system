import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileTextInfo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-text-info_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-text-info_svg__a"
      d="M4.5 8.5H14M4.5 11.5h6M4.5 5.5h7M4.5 14.5h4M4.5 17.5h4M10.5 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <circle
      className="common-file-text-info_svg__a"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="common-file-text-info_svg__a"
      d="M17.5 20.5V17a.5.5 0 00-.5-.5h-1M16.75 14a.25.25 0 11-.25.25.25.25 0 01.25-.25M16 20.5h3"
    />
  );

export default SvgCommonFileTextInfo;
