import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralFolderBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-folder-box_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-folder-box_svg__cls-1"
      d="M20.5 14V5.5A.5.5 0 0020 5h-8.956A1.739 1.739 0 019.47 4 1.741 1.741 0 007.9 3H4a.5.5 0 00-.5.5V14M18.5 3h-6.456a1.739 1.739 0 01-1.574-1A1.741 1.741 0 008.9 1H5.5M.5 16l.839-4.2a1 1 0 01.981-.8H3.5M23.5 16l-.839-4.2a1 1 0 00-.981-.8H20.5M18.5 16a1.5 1.5 0 00-1.5 1.54A1.512 1.512 0 0115.442 19H8.558A1.512 1.512 0 017 17.54 1.5 1.5 0 005.5 16h-5v6a1 1 0 001 1h21a1 1 0 001-1v-6z"
    />,
    <path
      className="single-neutral-folder-box_svg__cls-1"
      d="M8 15a3.524 3.524 0 01.348-1.411c.245-.49 1.269-.83 2.555-1.307.348-.129.291-1.036.137-1.206a2.567 2.567 0 01-.668-1.989 1.632 1.632 0 113.256 0 2.567 2.567 0 01-.668 1.989c-.154.17-.211 1.077.137 1.206 1.286.477 2.31.817 2.555 1.307A3.524 3.524 0 0116 15z"
    />
  );

export default SvgSingleNeutralFolderBox;
