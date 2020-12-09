import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderMusic1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-music-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-music-1_svg__a"
      d="M11.736 5a1 1 0 01-.894-.553l-.948-1.894A1 1 0 009 2H1.5a1 1 0 00-1 1v18a1 1 0 001 1h21a1 1 0 001-1V6a1 1 0 00-1-1z"
    />,
    <circle className="folder-music-1_svg__a" cx={15} cy={15.675} r={1.5} />,
    <circle className="folder-music-1_svg__a" cx={8} cy={16.675} r={1.5} />,
    <path
      className="folder-music-1_svg__a"
      d="M9.5 16.675v-5.746a1 1 0 01.725-.961l5-1.429A1 1 0 0116.5 9.5v6.174"
    />
  );

export default SvgFolderMusic1;
