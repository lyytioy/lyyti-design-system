import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-information_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-information_svg__cls-1"
      cx={18.5}
      cy={18.5}
      r={5}
    />,
    <path
      className="multiple-actions-information_svg__cls-1"
      d="M18.5 20.5V19a.5.5 0 00-.5-.5h-.5M17.5 20.5h2M18 16.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M.5 13.5a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.153-2.124.565-.209.472-1.684.222-1.96a4.167 4.167 0 01-1.085-3.231A2.725 2.725 0 017 .5a2.725 2.725 0 012.645 2.985A4.167 4.167 0 018.56 6.717c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124a7.089 7.089 0 01.565 2.7zM10.912.737A2.573 2.573 0 0112 .5a2.725 2.725 0 012.645 2.985 4.167 4.167 0 01-1.085 3.232c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124a4.289 4.289 0 01.267.687"
    />
  );

export default SvgMultipleActionsInformation;
