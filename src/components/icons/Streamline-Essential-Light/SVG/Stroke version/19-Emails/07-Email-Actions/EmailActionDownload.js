import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="email-action-download_svg__a"
      x={2.5}
      y={11.5}
      width={19}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="email-action-download_svg__a"
      d="M21.068 11.947L12 19l-9.068-7.053M12 9V.5M16.5 4.5L12 9 7.5 4.5"
    />
  );

export default SvgEmailActionDownload;
