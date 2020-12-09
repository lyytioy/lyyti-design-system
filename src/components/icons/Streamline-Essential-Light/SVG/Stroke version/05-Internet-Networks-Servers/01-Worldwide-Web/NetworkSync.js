import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-sync_svg__a"
      d="M1.898 17.498l7.603.001M2.512 5.498h18.984M10.501 11.498H.511M9 23.1A11.5 11.5 0 1123.338 10M11.269.524C5.888 6.355 5.42 13.76 9.711 21M12.73.524A16.018 16.018 0 0117.066 9.5"
    />,
    <path
      className="network-sync_svg__a"
      d="M15.001 18.5h-3.5V22M22.918 19.733A5.572 5.572 0 0112.1 18.5M20.001 16.5h3.5V13M12.084 15.267A5.572 5.572 0 0122.9 16.5"
    />
  );

export default SvgNetworkSync;
