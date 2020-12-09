import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalFlags1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-flags-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="signal-flags-1_svg__a" cx={12} cy={4.875} r={2.625} />,
    <path
      className="signal-flags-1_svg__a"
      d="M19.5 9H6.75V6.75a1.5 1.5 0 00-3 0v3.75a1.5 1.5 0 001.5 1.5H9v4.5l-2.771 4.455a1.5 1.5 0 102.542 1.591L12 17.38l3.229 5.166a1.5 1.5 0 102.542-1.591L15 16.5V12h4.5a1.5 1.5 0 000-3z"
    />,
    <path
      className="signal-flags-1_svg__a"
      d="M17.25 15v.75a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-4.5a.75.75 0 00-.75-.75H21M6.75 2.25a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5v4.5a.75.75 0 00.75.75H3"
    />
  );

export default SvgSignalFlags1;
