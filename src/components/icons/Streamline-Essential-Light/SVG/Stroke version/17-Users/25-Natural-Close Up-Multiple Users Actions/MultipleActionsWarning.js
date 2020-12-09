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
    <path
      className="multiple-actions-warning_svg__cls-1"
      d="M18.5 19v-2.5M23.376 22.021l-4-8a1 1 0 00-1.756 0l-4 8a1 1 0 00.88 1.479h8a1 1 0 00.876-1.479z"
    />,
    <path
      className="multiple-actions-warning_svg__cls-1"
      d="M18.5 20.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M.5 13.5a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.153-2.124.565-.209.472-1.684.222-1.96a4.167 4.167 0 01-1.085-3.231A2.725 2.725 0 017 .5a2.725 2.725 0 012.645 2.985A4.167 4.167 0 018.56 6.717c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124a7.089 7.089 0 01.565 2.7zM10.912.737A2.573 2.573 0 0112 .5a2.725 2.725 0 012.645 2.985 4.167 4.167 0 01-1.085 3.232c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124.034.068.066.138.1.209"
    />
  );

export default SvgMultipleActionsWarning;
