import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-share_svg__a"
      d="M8.25 18.75H2.447M20.25 8.25v-3a1.5 1.5 0 00-1.5-1.5H8.25v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v14.8a1.7 1.7 0 003.336.438l2.351-8.154A1.5 1.5 0 017.879 8.25H21.75"
    />,
    <circle className="folder-share_svg__a" cx={13.5} cy={18} r={2.25} />,
    <circle className="folder-share_svg__a" cx={21} cy={21} r={2.25} />,
    <circle className="folder-share_svg__a" cx={21} cy={13.5} r={2.25} />,
    <path
      className="folder-share_svg__a"
      d="M15.425 16.845l3.65-2.19M15.588 18.835l3.324 1.33"
    />
  );

export default SvgFolderShare;
