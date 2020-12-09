import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserGauge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-gauge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="browser-gauge_svg__a"
      d="M23.5 19.5a2 2 0 01-2 2h-19a2 2 0 01-2-2v-16a2 2 0 012-2h19a2 2 0 012 2zM.5 6.5h23M4.25 3.5"
    />,
    <path
      className="browser-gauge_svg__a"
      d="M4.25 3.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.25 3.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M10.25 3.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M4 18.001h2M5.072 14.001l1.732 1M8 11.072l1 1.732M12 10v1.999M18.93 13.999l-1.732.999M20.002 17.999h-1.999M15.629 11.93c.2-.511.053-.611-.336-.222l-4.086 4.086A2.782 2.782 0 0010.5 17.5v.5a.79.79 0 00.981.8l.538-.108a2.065 2.065 0 001.352-1.124z"
    />
  );

export default SvgBrowserGauge;
