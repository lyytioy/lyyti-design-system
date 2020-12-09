import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserGauge1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-gauge-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="browser-gauge-1_svg__a"
      d="M23.5 19.5a2 2 0 01-2 2h-19a2 2 0 01-2-2v-16a2 2 0 012-2h19a2 2 0 012 2zM.5 6.5h23M4 17.534h2M12 9.533v1.999M6.342 11.875l1.413 1.413M20.002 17.532h-1.999M4.497 1.5v5M8.497 1.5v5"
    />,
    <path
      className="browser-gauge-1_svg__a"
      d="M16.8 12.932c.291-.4.183-.518-.242-.267L12.1 15.3a2.5 2.5 0 00-1 1.323l-.1.431a.707.707 0 00.671.917l.492.027a1.854 1.854 0 001.425-.673z"
    />
  );

export default SvgBrowserGauge1;
