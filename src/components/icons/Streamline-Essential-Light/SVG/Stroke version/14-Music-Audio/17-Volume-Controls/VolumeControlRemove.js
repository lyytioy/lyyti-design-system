import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-remove_svg__a"
      d="M12.5 10.3V1.957a1 1 0 00-1.707-.707L5.5 6.543H2a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3.5l4 4M15.405 8.83a2.994 2.994 0 00-2.9-2.287"
    />,
    <circle
      className="volume-control-remove_svg__a"
      cx={17.5}
      cy={16.543}
      r={6}
    />,
    <path
      className="volume-control-remove_svg__a"
      d="M19.621 14.422l-4.242 4.242M19.621 18.664l-4.242-4.242"
    />
  );

export default SvgVolumeControlRemove;
