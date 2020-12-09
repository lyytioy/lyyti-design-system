import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArchiveDrawerTable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".archive-drawer-table_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="archive-drawer-table_svg__a"
      d="M18.75 21.75H5.25a3 3 0 01-3-3v-18h19.5v18a3 3 0 01-3 3zM5.25 21.75v1.5M18.75 21.75v1.5M.75.75h1.5M21.75.75h1.5"
    />,
    <path
      className="archive-drawer-table_svg__a"
      d="M12 4.875c.1 0-.375-.034-.375.375A.375.375 0 1012 4.875M12 13.5c.1 0-.375-.034-.375.375A.375.375 0 1012 13.5M2.25 9h19.5"
    />
  );

export default SvgArchiveDrawerTable;
