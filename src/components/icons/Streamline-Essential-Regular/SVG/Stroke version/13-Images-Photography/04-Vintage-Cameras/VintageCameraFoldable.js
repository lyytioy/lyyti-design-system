import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageCameraFoldable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-camera-foldable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="vintage-camera-foldable_svg__a"
      d="M9.75 15.75h-7.5a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h6a1.5 1.5 0 011.5 1.5zM9.75 12.75l9-2.25v-6l-9-2.25v10.5zM18.75 9l3.513 1.171a.75.75 0 00.987-.712V5.541a.75.75 0 00-.987-.712L18.75 6z"
    />,
    <path
      className="vintage-camera-foldable_svg__a"
      d="M9.75 15.75h9V2.25M4.5 15.75l10.5 7.5M15 15.75l-10.5 7.5M14.25 3.375v8.25"
    />
  );

export default SvgVintageCameraFoldable;
