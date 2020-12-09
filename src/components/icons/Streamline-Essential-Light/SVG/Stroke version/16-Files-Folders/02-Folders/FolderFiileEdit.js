import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderFiileEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-fiile-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-fiile-edit_svg__a"
      d="M21 9.5v11a1 1 0 01-1 1h-5M4 12.5v-11a1 1 0 011-1h11.086M14 14.5H7a1 1 0 01-.8-.4l-.9-1.2a1 1 0 00-.8-.4H2a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1v-7a1 1 0 00-1-1zM16.5 10L13 11l1-3.5 5.982-5.982a1.768 1.768 0 012.5 2.5z"
    />
  );

export default SvgFolderFiileEdit;
