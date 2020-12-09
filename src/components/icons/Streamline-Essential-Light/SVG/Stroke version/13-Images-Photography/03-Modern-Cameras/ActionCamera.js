import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgActionCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".action-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="action-camera_svg__a"
      d="M20.5 22.5a1 1 0 01-1 1h-11a1 1 0 010-2h11a1 1 0 011 1zM12.5 17.5h3v4h-3zM12.5 19.5h-7"
    />,
    <rect
      className="action-camera_svg__a"
      x={5.5}
      y={0.5}
      width={17}
      height={17}
      rx={4}
      ry={4}
    />,
    <rect
      className="action-camera_svg__a"
      x={7.5}
      y={2.5}
      width={13}
      height={13}
      rx={2}
      ry={2}
    />,
    <path
      className="action-camera_svg__a"
      d="M4.564 21.351A1.442 1.442 0 005.5 20v-1a1.442 1.442 0 00-.936-1.351l-2.128-.8a.692.692 0 00-.936.651v4a.692.692 0 00.936.649z"
    />,
    <circle className="action-camera_svg__a" cx={14} cy={9} r={4.5} />,
    <circle className="action-camera_svg__a" cx={14} cy={9} r={2.5} />
  );

export default SvgActionCamera;
