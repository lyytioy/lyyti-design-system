import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFaceId = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".face-id_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="face-id_svg__a"
      d="M7.5 16.881a6.68 6.68 0 009 0M6.75 6.624v2.25M17.25 6.624v2.25M12 6.624v5.25a1.5 1.5 0 01-1.5 1.5h-.75M23.25 18.624v3a1.5 1.5 0 01-1.5 1.5h-3M18.75.624h3a1.5 1.5 0 011.5 1.5v3M.75 5.124v-3a1.5 1.5 0 011.5-1.5h3M5.25 23.124h-3a1.5 1.5 0 01-1.5-1.5v-3"
    />
  );

export default SvgFaceId;
