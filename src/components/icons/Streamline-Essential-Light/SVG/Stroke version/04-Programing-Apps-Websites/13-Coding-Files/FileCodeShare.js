import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="file-code-share_svg__a"
      cx={13.781}
      cy={18.254}
      r={2.25}
    />,
    <circle
      className="file-code-share_svg__a"
      cx={21.281}
      cy={21.254}
      r={2.25}
    />,
    <circle
      className="file-code-share_svg__a"
      cx={21.281}
      cy={13.754}
      r={2.25}
    />,
    <path
      className="file-code-share_svg__a"
      d="M15.706 17.099l3.65-2.19M15.869 19.089l3.325 1.33M11.531 23.5h-10a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V8.5M3.531 5.504v4M12.531 5.504v4M9.531 12.504v4M15.531 5.504v4"
    />,
    <path
      className="file-code-share_svg__a"
      d="M8.031 5.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 11-3 0V7a1.5 1.5 0 011.5-1.5zM5.031 12.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0v-1a1.5 1.5 0 011.5-1.5z"
    />
  );

export default SvgFileCodeShare;
