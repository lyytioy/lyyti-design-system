import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSatelliteSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".satellite-signal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="satellite-signal_svg__a"
      cx={12.393}
      cy={11.606}
      r={4}
    />,
    <path
      className="satellite-signal_svg__a"
      d="M12.217 11.429a.25.25 0 110 .354.249.249 0 010-.354M9.565 8.777L8.151 7.363M1.433 4.18L4.97.646a.5.5 0 01.707 0l3.889 3.89a1 1 0 010 1.413L6.737 8.777a1 1 0 01-1.415 0l-3.889-3.89a.5.5 0 010-.706zM15.222 14.434l1.414 1.414M23.354 19.03l-3.536 3.536a.5.5 0 01-.707 0l-3.889-3.89a1 1 0 010-1.413l2.829-2.829a1 1 0 011.414 0l3.889 3.89a.5.5 0 010 .706zM2.37 10.869A8 8 0 0013.13 21.63M5.092 13.592a4.5 4.5 0 005.316 5.315"
    />
  );

export default SvgSatelliteSignal;
