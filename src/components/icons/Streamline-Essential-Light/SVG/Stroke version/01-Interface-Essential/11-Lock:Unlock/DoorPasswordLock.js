import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDoorPasswordLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".door-password-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="door-password-lock_svg__a"
      d="M2.75 7.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M9.25 7.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M6 7.5a.25.25 0 11-.25.25A.25.25 0 016 7.5M2.75 10a.25.25 0 11-.25.25.25.25 0 01.25-.25M9.25 10a.25.25 0 11-.25.25.25.25 0 01.25-.25M6 10a.25.25 0 11-.25.25A.25.25 0 016 10M.5 5.5h11M.5 12.5h11M21.5 18a.662.662 0 01-.481.637l-1.037.3a14.7 14.7 0 01-4.043.566H6a1.5 1.5 0 010-3h9.939a14.74 14.74 0 014.043.566l1.037.3A.662.662 0 0121.5 18zM9.163 19.5a3.5 3.5 0 110-3"
    />,
    <path
      className="door-password-lock_svg__a"
      d="M11.5 19.5a4 4 0 01-4 4h-3a4 4 0 01-4-4v-15a4 4 0 014-4h3a4 4 0 014 4v12"
    />
  );

export default SvgDoorPasswordLock;
