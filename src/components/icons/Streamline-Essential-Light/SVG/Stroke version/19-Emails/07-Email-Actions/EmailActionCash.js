import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-cash_svg__a"
      d="M19.5 8.75l4 2.75V22a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 22V11.5l4-2.75"
    />,
    <path
      className="email-action-cash_svg__a"
      d="M3.5 20.5l5-4h7l5 4M23.5 11.5l-6 4M.5 11.5l6 4M19.5 14.167V1.5a1 1 0 00-1-1h-13a1 1 0 00-1 1v12.667"
    />,
    <path
      className="email-action-cash_svg__a"
      d="M13.5 5.5h-1.7a1.3 1.3 0 00-.723 2.387l1.84 1.226A1.3 1.3 0 0112.2 11.5h-1.7M12.498 5.5v-1M11.498 12.5v-1"
    />
  );

export default SvgEmailActionCash;
