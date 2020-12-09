import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgActionCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".action-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="action-camera_svg__a" cx={13.875} cy={9} r={2.25} />,
    <path
      className="action-camera_svg__a"
      d="M12.375 17.25h3v6h-3zM12.375 20.25h-6.75"
    />,
    <rect
      className="action-camera_svg__a"
      x={5.625}
      y={0.75}
      width={16.5}
      height={16.5}
      rx={2}
      ry={2}
    />,
    <rect
      className="action-camera_svg__a"
      x={8.625}
      y={3.75}
      width={10.5}
      height={10.5}
      rx={1}
      ry={1}
    />,
    <path
      className="action-camera_svg__a"
      d="M4.747 21.7a1.365 1.365 0 00.878-1.278v-.942a1.365 1.365 0 00-.878-1.28l-1.994-.755a.647.647 0 00-.6.075.656.656 0 00-.28.539v3.783a.653.653 0 00.28.538.641.641 0 00.6.075zM7.875 23.25h12"
    />
  );

export default SvgActionCamera;
