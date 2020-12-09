import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraDisplay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-display_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-display_svg__a"
      d="M20.128 6.5a1 1 0 01-.905-.572C18.635 4.686 18.09 3.5 17 3.5h-5c-.931 0-1.406.836-2.7 2.592a1 1 0 01-.8.408h-6c-1.5 0-2 .679-2 1.723v10.388c0 1.043.5 1.889 2.056 1.889h18.888c1.556 0 2.056-.846 2.056-1.889V8.223c0-1.044-.5-1.723-2.056-1.723z"
    />,
    <path
      className="camera-display_svg__a"
      d="M2.5 6.484V5.5a1 1 0 011-1h1a1 1 0 011 1v1"
    />,
    <circle className="camera-display_svg__a" cx={17.5} cy={14.5} r={4} />,
    <rect
      className="camera-display_svg__a"
      x={2.5}
      y={10.5}
      width={9}
      height={8}
      rx={1}
      ry={1}
    />,
    <path
      className="camera-display_svg__a"
      d="M17.5 12.5v1M17.5 15.5v1M19.5 14.5h-1M16.5 14.5h-1M4 8.247a.25.25 0 11-.25.25.249.249 0 01.25-.25M6 8.247a.25.25 0 11-.25.25.249.249 0 01.25-.25M8 8.247a.25.25 0 11-.25.25.249.249 0 01.25-.25"
    />
  );

export default SvgCameraDisplay;
