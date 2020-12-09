import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-check_svg__a"
      d="M20.5 8.5v-4a1 1 0 00-1-1H9.618a1 1 0 01-.894-.553l-.948-1.894A1 1 0 006.882.5H1.5a1 1 0 00-1 1v15a1 1 0 001 1h7"
    />,
    <circle className="folder-check_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="folder-check_svg__a"
      d="M20.174 15.756l-2.905 3.873a.751.751 0 01-1.131.08l-1.5-1.5"
    />
  );

export default SvgFolderCheck;
