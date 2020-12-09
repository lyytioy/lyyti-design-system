import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-location_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-location_svg__cls-1"
      d="M23.5 17.5c0 2.5-4 6-4 6s-4-3.5-4-6a4 4 0 018 0z"
    />,
    <path
      className="multiple-actions-location_svg__cls-1"
      d="M19.5 17.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M.5 13.5a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.153-2.124.565-.209.472-1.684.222-1.96a4.167 4.167 0 01-1.085-3.231A2.725 2.725 0 017 .5a2.725 2.725 0 012.645 2.985A4.167 4.167 0 018.56 6.717c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124a7.089 7.089 0 01.565 2.7zM10.912.737A2.573 2.573 0 0112 .5a2.725 2.725 0 012.645 2.985 4.167 4.167 0 01-1.085 3.232c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124a4.389 4.389 0 01.27.7"
    />
  );

export default SvgMultipleActionsLocation;
