import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalFlags = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-flags_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="signal-flags_svg__a" cx={12} cy={4.875} r={2.625} />,
    <path
      className="signal-flags_svg__a"
      d="M19.5 9h-7.948a8.444 8.444 0 01-6.63-3.187 1.5 1.5 0 00-2.344 1.875A11.438 11.438 0 009 11.717V16.5l-2.771 4.455a1.5 1.5 0 102.543 1.591L12 17.38l3.229 5.166a1.5 1.5 0 002.543-1.591L15 16.5V12h4.5a1.5 1.5 0 000-3z"
    />,
    <path
      className="signal-flags_svg__a"
      d="M17.25 15v.75a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-4.5a.75.75 0 00-.75-.75H21M.75 4.5V2.25a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5V4.5"
    />
  );

export default SvgSignalFlags;
