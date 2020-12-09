import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureDoubleLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-double-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="picture-double-landscape_svg__a"
      d="M18.5 6V5a2 2 0 00-2-2h-14a2 2 0 00-2 2v9a2 2 0 002 2h1"
    />,
    <rect
      className="picture-double-landscape_svg__a"
      x={5.5}
      y={8}
      width={18}
      height={13}
      rx={2}
      ry={2}
    />,
    <path
      className="picture-double-landscape_svg__a"
      d="M8.5 18l3.276-6.553A.81.81 0 0112.5 11a.887.887 0 01.759.428L16.02 16l1.18-1.6a.991.991 0 01.8-.4.81.81 0 01.724.447L20.5 18z"
    />
  );

export default SvgPictureDoubleLandscape;
