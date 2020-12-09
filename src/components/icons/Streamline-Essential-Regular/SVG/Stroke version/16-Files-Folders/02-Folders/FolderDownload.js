import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-download_svg__a"
      d="M8.25 18.75H2.447M20.25 8.25v-3a1.5 1.5 0 00-1.5-1.5H8.25v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v14.8a1.7 1.7 0 003.336.438l2.351-8.154A1.5 1.5 0 017.879 8.25H21.75a1.5 1.5 0 011.45 1.886"
    />,
    <circle className="folder-download_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="folder-download_svg__a"
      d="M17.25 14.25v6M17.25 20.25L15 18M17.25 20.25L19.5 18"
    />
  );

export default SvgFolderDownload;
