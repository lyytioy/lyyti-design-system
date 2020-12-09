import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageCameraFoldable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-camera-foldable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="vintage-camera-foldable_svg__a"
      d="M9.5 13.5h-8a1 1 0 01-1-1v-11a1 1 0 011-1h7a1 1 0 011 1zM9.5 13.5h8a2.006 2.006 0 002-2v-10"
    />,
    <path
      className="vintage-camera-foldable_svg__a"
      d="M9.5 3.5a2 2 0 014 0v6a2 2 0 01-4 0M13.5 4a1.5 1.5 0 013 0v5a1.5 1.5 0 01-3 0M16.5 5a1.5 1.5 0 013 0M19.5 8a1.5 1.5 0 01-3 0M23.5 8.5a.569.569 0 01-.894.553L19.5 7.5v-2l3.106-1.553a.569.569 0 01.894.553zM6 13.5l10 10M16 13.5l-10 10M11 18.5v5"
    />
  );

export default SvgVintageCameraFoldable;
