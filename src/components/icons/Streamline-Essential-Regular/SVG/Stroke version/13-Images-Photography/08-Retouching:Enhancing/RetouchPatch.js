import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchPatch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-patch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="retouch-patch_svg__a"
      x={3.75}
      y={3.75}
      width={16.5}
      height={16.5}
      rx={2}
      ry={2}
    />,
    <path
      className="retouch-patch_svg__a"
      d="M9.75 6.62V.75M14.25 6.62V.75M17.38 9h5.87M17.38 13.5h5.87M14.25 17.38v5.87M9.75 17.38v5.87M6.62 13.5H.75M6.62 9H.75"
    />
  );

export default SvgRetouchPatch;
