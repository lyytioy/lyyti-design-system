import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="cloud-image_svg__a"
      x={11.25}
      y={11.25}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="cloud-image_svg__a"
      d="M15.375 14.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M23.25 21l-2.391-3.586a.749.749 0 00-1.238-.014l-2 2.85-1.236-.989a.751.751 0 00-1.093.17L12.75 23.25M22.483 8.25a4.865 4.865 0 00-6.872-1.385A7.5 7.5 0 108.25 15.75"
    />
  );

export default SvgCloudImage;
