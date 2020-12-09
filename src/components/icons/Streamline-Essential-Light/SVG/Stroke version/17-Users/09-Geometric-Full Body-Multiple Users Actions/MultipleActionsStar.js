import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-star_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <g id="multiple-actions-star_svg___10_23" data-name="10*23">
      <path
        className="multiple-actions-star_svg__cls-1"
        d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
      />
      <circle
        className="multiple-actions-star_svg__cls-1"
        cx={5.5}
        cy={4}
        r={3.5}
      />
    </g>,
    <g id="multiple-actions-star_svg___10_23_-_cut" data-name="10*23 - cut">
      <g id="multiple-actions-star_svg___Group_" data-name="&lt;Group&gt;">
        <path
          className="multiple-actions-star_svg__cls-1"
          d="M17.439 10.37a5.006 5.006 0 00-5.561-.9"
        />
        <circle
          className="multiple-actions-star_svg__cls-1"
          cx={14}
          cy={4.5}
          r={3}
        />
      </g>
    </g>,
    <path
      className="multiple-actions-star_svg__cls-1"
      d="M19.089 13.859l1.282 2.769h2.5A.612.612 0 0123.3 17.7l-2.166 2.135 1.2 2.761a.654.654 0 01-.931.819l-2.9-1.634-2.9 1.634a.654.654 0 01-.931-.819l1.2-2.761L13.7 17.7a.612.612 0 01.429-1.069h2.495l1.285-2.769a.662.662 0 011.18-.003z"
    />
  );

export default SvgMultipleActionsStar;
