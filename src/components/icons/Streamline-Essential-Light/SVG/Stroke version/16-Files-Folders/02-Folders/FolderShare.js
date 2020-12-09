import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-share_svg__a"
      d="M20.5 8.5v-4a1 1 0 00-1-1H9.618a1 1 0 01-.894-.553l-.948-1.894A1 1 0 006.882.5H1.5a1 1 0 00-1 1v15a1 1 0 001 1h7"
    />,
    <circle className="folder-share_svg__a" cx={13.75} cy={18.25} r={2.25} />,
    <circle className="folder-share_svg__a" cx={21.25} cy={21.25} r={2.25} />,
    <circle className="folder-share_svg__a" cx={21.25} cy={13.75} r={2.25} />,
    <path
      className="folder-share_svg__a"
      d="M15.675 17.095l3.65-2.19M15.838 19.085l3.324 1.33"
    />
  );

export default SvgFolderShare;
