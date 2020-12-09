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
    <g id="multiple-actions-image_svg___10_23" data-name="10*23">
      <path
        className="multiple-actions-image_svg__cls-1"
        d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
      />
      <circle
        className="multiple-actions-image_svg__cls-1"
        cx={5.5}
        cy={4}
        r={3.5}
      />
    </g>,
    <g id="multiple-actions-image_svg___10_23_-_cut" data-name="10*23 - cut">
      <g id="multiple-actions-image_svg___Group_" data-name="&lt;Group&gt;">
        <path
          className="multiple-actions-image_svg__cls-1"
          d="M17.439 10.37a5.006 5.006 0 00-5.561-.9"
        />
        <circle
          className="multiple-actions-image_svg__cls-1"
          cx={14}
          cy={4.5}
          r={3}
        />
      </g>
    </g>,
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
      d="M23.5 21.5l-2.137-2.137a1 1 0 00-1.54.152L18.5 21.5l-1.157-1.157a1 1 0 00-1.527.134l-1.955 2.793M17 16.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgMultipleActionsImage;
