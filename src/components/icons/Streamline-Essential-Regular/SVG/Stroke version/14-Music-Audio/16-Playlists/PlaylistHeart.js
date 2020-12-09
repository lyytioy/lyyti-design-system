import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="playlist-heart_svg__a"
      d="M20.25 8.25v-6a1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h6"
    />,
    <circle
      className="playlist-heart_svg__a"
      cx={6.375}
      cy={13.125}
      r={1.875}
    />,
    <path
      className="playlist-heart_svg__a"
      d="M8.25 13.125V6.331a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423v4.671M17.25 23.25l-5.114-5.335a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.025 3.025 0 01-.567 3.492z"
    />
  );

export default SvgPlaylistHeart;
