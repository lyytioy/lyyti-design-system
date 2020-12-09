import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-cash_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-cash_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <path
      className="smart-watch-circle-cash_svg__a"
      d="M14 8.5h-2.146a1.854 1.854 0 00-.829 3.512l1.95.976a1.854 1.854 0 01-.829 3.512H10M12 16.5V18M12 7v1.5"
    />
  );

export default SvgSmartWatchCircleCash;
