import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardBadge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-badge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-badge_svg__a"
      d="M18.5 1.757a1 1 0 00-1-1h-11a1 1 0 00-1 1v20.986a.5.5 0 00.8.4l5.715-4.383 5.675 4.379a.5.5 0 00.8-.4V1.757z"
    />,
    <path
      className="award-badge_svg__a"
      d="M5.5 8.757l5.909-4.532a1 1 0 011.219 0L18.5 8.757M5.5 13.757l5.909-4.532a1 1 0 011.219 0l5.871 4.53M5.5 18.757l5.909-4.532a1 1 0 011.219 0l5.871 4.53"
    />
  );

export default SvgAwardBadge;
