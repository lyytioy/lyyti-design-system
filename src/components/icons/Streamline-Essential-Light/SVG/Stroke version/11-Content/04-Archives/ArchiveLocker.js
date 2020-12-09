import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArchiveLocker = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".archive-locker_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="archive-locker_svg__a"
      d="M3.031 8H21M3.031 15H21M13.919 5.724a.5.5 0 01-.447.276H10.59a.5.5 0 01-.447-.276l-.5-1A.5.5 0 0110.09 4h3.882a.5.5 0 01.447.723zM13.919 12.723a.5.5 0 01-.447.276H10.59a.5.5 0 01-.447-.276l-.5-1A.5.5 0 0110.09 11h3.882a.5.5 0 01.447.723zM13.919 20.724a.5.5 0 01-.447.276H10.59a.5.5 0 01-.447-.276l-.5-1A.5.5 0 0110.09 19h3.882a.5.5 0 01.447.723z"
    />,
    <path
      className="archive-locker_svg__a"
      d="M21 22a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1h16a1 1 0 011 1z"
    />
  );

export default SvgArchiveLocker;
