import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentSaxophonePlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-saxophone-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-saxophone-play_svg__a"
      d="M19.777 1.481A2.548 2.548 0 0018.4 4.81l4.542 10.99c1.076 2.6-.8 5.845-3.547 6.982s-6.366.164-7.442-2.437L10.817 17.6a1.275 1.275 0 00-.979-.772.488.488 0 01-.374-.67l2.688-6.482a.489.489 0 01.9 0l2.8 6.76a1.274 1.274 0 002.355-.974l-2.76-6.672c-1.076-2.6 1.73-6.231 4.331-7.307l1.176-.489"
    />,
    <circle
      className="instrument-saxophone-play_svg__a"
      cx={5.25}
      cy={12.75}
      r={1.5}
    />,
    <path className="instrument-saxophone-play_svg__a" d="M6.75 12.75v-4.5" />,
    <circle
      className="instrument-saxophone-play_svg__a"
      cx={2.25}
      cy={5.25}
      r={1.5}
    />,
    <path className="instrument-saxophone-play_svg__a" d="M3.75 5.25V.75" />
  );

export default SvgInstrumentSaxophonePlay;
