import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentTuba = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-tuba_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-tuba_svg__a"
      d="M3.481 14.519l6 6c1.5 1.5-1 4-2.5 2.5l-6-6c-1.5-1.5 1-4 2.5-2.5zM18.481.519l5 5M20.981 3.019l2.5-2.5"
    />,
    <circle
      className="instrument-tuba_svg__a"
      cx={8.481}
      cy={11.019}
      r={1.5}
    />,
    <circle
      className="instrument-tuba_svg__a"
      cx={12.481}
      cy={7.519}
      r={1.5}
    />,
    <path
      className="instrument-tuba_svg__a"
      d="M7.392 12.047l-3.411 2.972 5 5 13.5-15.5-3-3-5.826 5.074M11.401 8.557l-1.755 1.527"
    />
  );

export default SvgInstrumentTuba;
