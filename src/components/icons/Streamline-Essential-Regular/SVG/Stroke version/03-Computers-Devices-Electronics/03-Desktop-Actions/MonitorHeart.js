import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-heart_svg__a"
      d="M8.25 20.25l.75-4.5M6 20.25h5.25M.75 12.68h8.383M9 15.75H3.75a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3v6"
    />,
    <path
      className="monitor-heart_svg__a"
      d="M17.25 23.25l-5.114-5.335a3.023 3.023 0 01-.566-3.492 3.025 3.025 0 014.845-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.025 3.025 0 01-.567 3.492z"
    />
  );

export default SvgMonitorHeart;
