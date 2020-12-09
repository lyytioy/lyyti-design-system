import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="image-file-landscape_svg__a" cx={8.5} cy={9.5} r={2} />,
    <path
      className="image-file-landscape_svg__a"
      d="M13.924 12.178a.5.5 0 00-.848 0L10.437 16.4l-1.075-1.722a.5.5 0 00-.848 0L5.5 19.5h13z"
    />,
    <path
      className="image-file-landscape_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293z"
    />
  );

export default SvgImageFileLandscape;
