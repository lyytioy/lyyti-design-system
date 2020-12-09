import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileFavoriteHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-favorite-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-favorite-heart_svg__a"
      d="M12.5 23.5h-11a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.708V10.5M9.016 15.478A5 5 0 1114.5 10.49"
    />,
    <path
      className="time-clock-file-favorite-heart_svg__a"
      d="M9.5 7.501v3h2M17.861 23.124a.5.5 0 01-.722 0l-4.753-4.958a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.025 3.025 0 01-.567 3.492z"
    />
  );

export default SvgTimeClockFileFavoriteHeart;
