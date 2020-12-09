import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderMedia = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-media_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-media_svg__a"
      d="M18.75 6.75v-1.5a1.5 1.5 0 00-1.5-1.5h-9v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v16.3"
    />,
    <path
      className="folder-media_svg__a"
      d="M3.75 20.25v-12a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.5 1.5v1.5"
    />,
    <rect
      className="folder-media_svg__a"
      x={6.75}
      y={9.75}
      width={16.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="folder-media_svg__a"
      d="M12.488 20.16a.856.856 0 01-1.238-.766v-5.788a.856.856 0 011.238-.766l5.789 2.895a.855.855 0 010 1.53z"
    />
  );

export default SvgFolderMedia;
