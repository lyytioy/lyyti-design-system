import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-upload_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-upload_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3z"
    />,
    <circle
      className="smart-watch-square-upload_svg__a"
      cx={12}
      cy={12}
      r={5}
    />,
    <path
      className="smart-watch-square-upload_svg__a"
      d="M12 10v4M10 12l2-2 2 2"
    />
  );

export default SvgSmartWatchSquareUpload;
