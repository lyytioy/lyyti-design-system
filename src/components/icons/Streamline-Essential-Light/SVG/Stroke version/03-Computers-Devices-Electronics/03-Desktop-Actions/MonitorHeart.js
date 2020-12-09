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
      d="M5.5 17.5h4M.5 11.5h11M8.5 14.5V16A1.5 1.5 0 017 17.5"
    />,
    <path
      className="monitor-heart_svg__a"
      d="M20.5 10.5v-9a1 1 0 00-1-1h-18a1 1 0 00-1 1v12a1 1 0 001 1h8"
    />,
    <path
      className="monitor-heart_svg__a"
      d="M17.5 23.5l-5.114-5.335a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.025 3.025 0 01-.567 3.492z"
    />
  );

export default SvgMonitorHeart;
