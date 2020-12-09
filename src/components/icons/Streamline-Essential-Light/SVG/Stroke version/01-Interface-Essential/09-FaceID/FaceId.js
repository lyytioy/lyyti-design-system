import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFaceId = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".face-id_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="face-id_svg__a"
      d="M.5 6.5v-3a3 3 0 013-3h3M23.5 6.5v-3a3 3 0 00-3-3h-3M.5 17.5v3a3 3 0 003 3h3M23.5 17.5v3a3 3 0 01-3 3h-3M12.5 8v4.5A1.5 1.5 0 0111 14h-.5M7.5 8v2.5M17.5 8v2.5M8.233 17a5.48 5.48 0 007.534 0"
    />
  );

export default SvgFaceId;
