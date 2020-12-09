import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareMissedCall = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-missed-call_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-square-missed-call_svg__a"
      d="M8.285 14.094l2.227-2.227a1.459 1.459 0 000-1.818L9.5 9.039a1.384 1.384 0 00-1.82 0l-.909.909c-1.817 1.816 5.962 9.6 7.778 7.778l.91-.91a1.383 1.383 0 000-1.819l-1.01-1.01a1.384 1.384 0 00-1.818 0l-2.227 2.227M13.5 10.5L17 7M16 10.5h-2.5V8"
    />,
    <rect
      className="smart-watch-square-missed-call_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-missed-call_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3z"
    />
  );

export default SvgSmartWatchSquareMissedCall;
