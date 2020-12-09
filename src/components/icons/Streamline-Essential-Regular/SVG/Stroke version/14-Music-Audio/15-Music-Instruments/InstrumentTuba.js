import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentTuba = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-tuba_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-tuba_svg__a"
      d="M8.636 22.809a1.5 1.5 0 01-2.127 0l-5.318-5.318a1.5 1.5 0 012.127-2.127l5.318 5.318a1.5 1.5 0 010 2.127zM20.628 3.372L23.25.75M18.007.75l5.243 5.243"
    />,
    <circle
      className="instrument-tuba_svg__a"
      cx={12.117}
      cy={7.461}
      r={1.504}
    />,
    <circle
      className="instrument-tuba_svg__a"
      cx={8.149}
      cy={10.938}
      r={1.504}
    />,
    <path
      className="instrument-tuba_svg__a"
      d="M8.597 20.642L22.201 4.945l-3.146-3.146-5.645 4.892M7.181 12.09l-3.823 3.313M11.172 8.631l-1.745 1.513"
    />
  );

export default SvgInstrumentTuba;
