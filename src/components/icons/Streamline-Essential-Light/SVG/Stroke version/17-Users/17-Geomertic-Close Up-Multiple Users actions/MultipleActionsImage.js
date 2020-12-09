import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-image_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="multiple-actions-image_svg__cls-1"
      x={13.5}
      y={13.5}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <path
      className="multiple-actions-image_svg__cls-1"
      d="M23.5 21.5l-2.137-2.138a1 1 0 00-1.54.153L18.5 21.5l-1.157-1.157a1 1 0 00-1.527.133l-1.955 2.793M17 16.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M10.5 15.5H.5a6 6 0 0110.472-4"
    />,
    <circle
      className="multiple-actions-image_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-image_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-image_svg__cls-1"
      d="M20.459 11.485a6 6 0 00-7.43-1.2"
    />
  );

export default SvgMultipleActionsImage;
