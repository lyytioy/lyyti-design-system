import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentDrums = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-drums_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="instrument-drums_svg__a"
      cx={8.723}
      cy={7.253}
      r={1.875}
    />,
    <path className="instrument-drums_svg__a" d="M7.395 5.929L1.712 1.487" />,
    <circle
      className="instrument-drums_svg__a"
      cx={15.472}
      cy={7.388}
      r={1.875}
    />,
    <path
      className="instrument-drums_svg__a"
      d="M16.852 6.118l5.856-4.212M22.178 11.985H1.502M1.292 22.483l20.996.03M2.793 22.483l4.708-10.378 4.289 10.393 4.709-10.513 4.289 10.528M2.793 11.985v10.498M20.788 12.015v10.498"
    />
  );

export default SvgInstrumentDrums;
