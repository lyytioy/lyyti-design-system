import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="zip-file-sync_svg__a"
      d="M15 18.75h-3.75v3.75M22.667 19.483a5.572 5.572 0 01-10.74-.733M19.5 15.75h3.75V12M11.833 15.017a5.572 5.572 0 0110.74.733M10.226 4.557a1.951 1.951 0 01-.474 1.533 2.039 2.039 0 01-3 0 1.951 1.951 0 01-.474-1.533L6.75.75h3zM8.25 9.375a.375.375 0 11-.375.375.375.375 0 01.375-.375M8.25 13.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M8.25 16.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="zip-file-sync_svg__a"
      d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />
  );

export default SvgZipFileSync;
