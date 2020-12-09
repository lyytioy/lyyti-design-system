import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-cash_svg__a"
      d="M3 6.969V2.25A1.5 1.5 0 014.5.75h6M12 17.03v4.72a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.72M18.75 3.75h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H15.75M17.25 3.75V3M17.25 10.5v-.75"
    />,
    <circle
      className="smart-watch-circle-cash_svg__a"
      cx={17.25}
      cy={6.75}
      r={6}
    />,
    <path
      className="smart-watch-circle-cash_svg__a"
      d="M8.372 5.338A6.8 6.8 0 007.5 5.25a6.75 6.75 0 106.046 9.7"
    />
  );

export default SvgSmartWatchCircleCash;
