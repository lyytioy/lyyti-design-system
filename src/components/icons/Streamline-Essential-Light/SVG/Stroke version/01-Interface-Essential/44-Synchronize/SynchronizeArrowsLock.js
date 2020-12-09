import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrowsLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrows-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrows-lock_svg__a"
      d="M.713 10.36l2.788 4.15 3.204-3.838M23.286 14.66l-2.785-4.15-3.207 3.84"
    />,
    <path
      className="synchronize-arrows-lock_svg__a"
      d="M20.463 10.549a8.62 8.62 0 01-6.508 9.727 8.494 8.494 0 01-7.931-2.225M3.505 14.485a8.848 8.848 0 016.538-10.751 8.488 8.488 0 018.325 2.64"
    />,
    <path
      className="synchronize-arrows-lock_svg__a"
      d="M10.5 15.506h4a1 1 0 001-1v-3a1 1 0 00-1-1h-4a1 1 0 00-1 1v3a1 1 0 001 1zM12.5 7.506a2 2 0 00-2 2v1h4v-1a2 2 0 00-2-2zM12.5 12.776"
    />,
    <path
      className="synchronize-arrows-lock_svg__a"
      d="M12.5 12.776a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgSynchronizeArrowsLock;
