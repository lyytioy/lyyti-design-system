import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tags-lock_svg__a"
      d="M9.75 19.188a1.5 1.5 0 01-2.121 0L2.25 13.81a1.5 1.5 0 010-2.122l10.5-10.5a1.5 1.5 0 011.061-.439h5.378a1.5 1.5 0 011.5 1.5v5.379a1.5 1.5 0 01-.439 1.06"
    />,
    <path
      className="tags-lock_svg__a"
      d="M17.314 4.5a.375.375 0 00-.375-.375.375.375 0 10.375.375"
    />,
    <rect
      className="tags-lock_svg__a"
      x={13.189}
      y={15.749}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="tags-lock_svg__a"
      d="M17.689 11.249a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM17.689 19.153a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgTagsLock;
