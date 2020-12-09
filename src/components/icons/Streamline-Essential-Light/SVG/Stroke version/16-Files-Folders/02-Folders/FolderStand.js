import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderStand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-stand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-stand_svg__a"
      d="M11.118 3.5a1 1 0 01-.894-.553l-.948-1.894A1 1 0 008.382.5H3a1 1 0 00-1 1v15a1 1 0 001 1h18a1 1 0 001-1v-12a1 1 0 00-1-1zM12 17.5v6M7 23.5h10M5 23.5H4M2 23.5H1M23 23.5h-1M20 23.5h-1"
    />
  );

export default SvgFolderStand;
