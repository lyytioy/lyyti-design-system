import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorAntenna = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-antenna_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-antenna_svg__a"
      d="M12.5 19.979A1.517 1.517 0 0014 21.5h8a1.517 1.517 0 001.5-1.521V14a1.5 1.5 0 00-1.5-1.5h-8a1.5 1.5 0 00-1.5 1.5zM12.5 18.5h11M16 23.5h4M18 21.5v2M4.346 7.832a5.224 5.224 0 007.333-1.055L3.291.5a5.224 5.224 0 001.055 7.332zM8.924 1.715l-1.44 1.924"
    />,
    <path
      className="monitor-antenna_svg__a"
      d="M3.851 7.412l-3.029 3.7c-.174.214-.092.388.178.388h5.7c.275 0 .358-.174.183-.387zM12 3.5h6.505v6.456M10 20.5H3.505v-6.544"
    />
  );

export default SvgMonitorAntenna;
