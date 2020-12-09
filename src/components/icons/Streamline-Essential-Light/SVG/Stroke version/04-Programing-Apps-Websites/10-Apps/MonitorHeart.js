import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-heart_svg__a"
      d="M5 22.004h14M11.5 20.004v2M.5 16.004h23M12 13L8.591 9.447a2.017 2.017 0 01-.378-2.328 2.017 2.017 0 013.23-.524l.557.557.557-.557a2.017 2.017 0 013.23.524 2.017 2.017 0 01-.378 2.328z"
    />,
    <rect
      className="monitor-heart_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={18}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgMonitorHeart;
