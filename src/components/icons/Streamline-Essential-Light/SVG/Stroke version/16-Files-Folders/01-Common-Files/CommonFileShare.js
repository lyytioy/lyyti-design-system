import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="common-file-share_svg__a"
      cx={13.756}
      cy={18.25}
      r={2.25}
    />,
    <circle
      className="common-file-share_svg__a"
      cx={21.256}
      cy={21.25}
      r={2.25}
    />,
    <circle
      className="common-file-share_svg__a"
      cx={21.256}
      cy={13.75}
      r={2.25}
    />,
    <path
      className="common-file-share_svg__a"
      d="M15.681 17.095l3.65-2.19M15.844 19.085l3.325 1.33M11.506 23.5h-10a1 1 0 01-1-1v-21a1 1 0 011-1H14.8a1 1 0 01.707.293L19.213 4.5a1 1 0 01.293.707V8.5"
    />
  );

export default SvgCommonFileShare;
