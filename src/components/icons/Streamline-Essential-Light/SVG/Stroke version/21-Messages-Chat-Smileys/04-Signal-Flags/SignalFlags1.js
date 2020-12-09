import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalFlags1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-flags-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="signal-flags-1_svg__a"
      d="M19.5 12H22a.5.5 0 01.5.5V17a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2M3.5 7h-2V2a1 1 0 011-1h3a1 1 0 011 1v3"
    />,
    <circle className="signal-flags-1_svg__a" cx={11.5} cy={7} r={2} />,
    <path
      className="signal-flags-1_svg__a"
      d="M19.5 12a1 1 0 00-1-1H10a2.5 2.5 0 01-2.5-2.5V6a1 1 0 00-2 0v2a4.675 4.675 0 003.257 4.814 1 1 0 01.743.965v2.055a.986.986 0 01-.054.323l-1.854 5.424a1 1 0 101.816.838l2.092-4.533 2.092 4.533a1 1 0 101.816-.838l-1.854-5.424a.986.986 0 01-.054-.323V14a1 1 0 011-1h4a1 1 0 001-1z"
    />
  );

export default SvgSignalFlags1;
