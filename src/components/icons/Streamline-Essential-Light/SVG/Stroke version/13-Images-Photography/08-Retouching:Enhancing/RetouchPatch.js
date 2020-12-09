import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchPatch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-patch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="retouch-patch_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="retouch-patch_svg__a"
      d="M9.5 6.5v-6M14.5 6.5v-6M17.5 9.5h6M17.5 14.5h6M14.5 17.5v6M9.5 17.5v6M6.5 14.5h-6M6.5 9.5h-6"
    />
  );

export default SvgRetouchPatch;
