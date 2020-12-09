import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudFile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-file_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="cloud-file_svg__a"
      x={11.25}
      y={11.25}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="cloud-file_svg__a"
      d="M14.25 14.25h6M14.25 17.25h6M14.25 20.25h2.25M22.483 8.25a4.865 4.865 0 00-6.872-1.385A7.5 7.5 0 108.25 15.75"
    />
  );

export default SvgCloudFile;
