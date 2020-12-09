import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-heart_svg__a"
      d="M5.25 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.25 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-heart_svg__a"
      d="M21.75 5.25a4.5 4.5 0 01-4.5 4.5h-12a4.5 4.5 0 010-9h12a4.5 4.5 0 014.5 4.5zM9 18.75H5.25a4.5 4.5 0 010-9h12M10.5 5.25h6.75"
    />,
    <path
      className="server-heart_svg__a"
      d="M17.251 23.25l-5.114-5.335a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.786l.835.835.835-.835a3.025 3.025 0 014.845.786 3.023 3.023 0 01-.566 3.492z"
    />
  );

export default SvgServerHeart;
