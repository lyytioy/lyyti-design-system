import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-warning_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <g id="multiple-actions-warning_svg___10_23" data-name="10*23">
      <path
        className="multiple-actions-warning_svg__cls-1"
        d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
      />
      <circle
        className="multiple-actions-warning_svg__cls-1"
        cx={5.5}
        cy={4}
        r={3.5}
      />
    </g>,
    <g id="multiple-actions-warning_svg___10_23_-_cut" data-name="10*23 - cut">
      <g id="multiple-actions-warning_svg___Group_" data-name="&lt;Group&gt;">
        <path
          className="multiple-actions-warning_svg__cls-1"
          d="M17.439 10.37a5.006 5.006 0 00-5.561-.9"
        />
        <circle
          className="multiple-actions-warning_svg__cls-1"
          cx={14}
          cy={4.5}
          r={3}
        />
      </g>
    </g>,
    <path
      className="multiple-actions-warning_svg__cls-1"
      d="M18.5 19v-2.5M23.376 22.021l-4-8a1 1 0 00-1.756 0l-4 8a1 1 0 00.88 1.479h8a1 1 0 00.876-1.479z"
    />,
    <path
      className="multiple-actions-warning_svg__cls-1"
      d="M18.5 20.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgMultipleActionsWarning;
