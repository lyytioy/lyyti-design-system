import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArchiveDrawerTable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".archive-drawer-table_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="archive-drawer-table_svg__a"
      d="M19 22v1M6 22v1M19.5 9a1 1 0 01-1 1h-13a1 1 0 01-1-1V5a1 1 0 011-1h13a1 1 0 011 1zM19.5 18a1 1 0 01-1 1h-13a1 1 0 01-1-1v-4a1 1 0 011-1h13a1 1 0 011 1zM10.5 7h3M10.5 16h3M.5 1h23"
    />,
    <path
      className="archive-drawer-table_svg__a"
      d="M22.5 1v19a2.006 2.006 0 01-2 2h-17a2.007 2.007 0 01-2-2V1"
    />
  );

export default SvgArchiveDrawerTable;
