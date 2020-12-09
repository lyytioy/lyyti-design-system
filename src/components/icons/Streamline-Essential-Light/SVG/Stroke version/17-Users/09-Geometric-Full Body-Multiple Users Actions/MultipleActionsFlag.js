import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-flag_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <g id="multiple-actions-flag_svg___10_23" data-name="10*23">
      <path
        className="multiple-actions-flag_svg__cls-1"
        d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
      />
      <circle
        className="multiple-actions-flag_svg__cls-1"
        cx={5.5}
        cy={4}
        r={3.5}
      />
    </g>,
    <g id="multiple-actions-flag_svg___10_23_-_cut" data-name="10*23 - cut">
      <g id="multiple-actions-flag_svg___Group_" data-name="&lt;Group&gt;">
        <path
          className="multiple-actions-flag_svg__cls-1"
          d="M17.439 10.37a5.006 5.006 0 00-5.561-.9"
        />
        <circle
          className="multiple-actions-flag_svg__cls-1"
          cx={14}
          cy={4.5}
          r={3}
        />
      </g>
    </g>,
    <path
      className="multiple-actions-flag_svg__cls-1"
      d="M15.5 19.849V23.5M15.5 19.849l1.075-.358a2.937 2.937 0 012.628.326 4.2 4.2 0 003.222.391l.733-.245a.5.5 0 00.342-.474V14.71a.5.5 0 00-.658-.475l-.417.139a4.355 4.355 0 01-3.249-.406 3.072 3.072 0 00-2.6-.31l-1.075.358z"
    />
  );

export default SvgMultipleActionsFlag;
