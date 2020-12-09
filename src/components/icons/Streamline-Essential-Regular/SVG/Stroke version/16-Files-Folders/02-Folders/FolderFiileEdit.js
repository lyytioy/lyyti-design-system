import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderFiileEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-fiile-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-fiile-edit_svg__a"
      d="M18.279 7.744l-2.529.506.506-2.529 4.552-4.552a1.43 1.43 0 012.023 0 1.43 1.43 0 010 2.023zM17.25 23.25a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5h-9v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5zM23.25 8.25v10.5a1.5 1.5 0 01-1.5 1.5h-3M6.75 11.25v-9a1.5 1.5 0 011.5-1.5h7.5"
    />
  );

export default SvgFolderFiileEdit;
