import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsView = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-view_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-view_svg__cls-1"
      cx={17.5}
      cy={17.508}
      r={4}
    />,
    <path
      className="multiple-actions-view_svg__cls-1"
      d="M20.328 20.336l3.172 3.172M.5 13.508a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.153-2.124.565-.209.472-1.684.222-1.96a4.167 4.167 0 01-1.085-3.231A2.725 2.725 0 017 .508a2.725 2.725 0 012.645 2.985A4.167 4.167 0 018.56 6.725c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124a7.089 7.089 0 01.565 2.7zM10.912.745A2.573 2.573 0 0112 .508a2.725 2.725 0 012.645 2.985 4.167 4.167 0 01-1.085 3.232c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124q.043.089.084.18"
    />
  );

export default SvgMultipleActionsView;
