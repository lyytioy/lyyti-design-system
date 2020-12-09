import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHomeToCloudSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".home-to-cloud-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="home-to-cloud-sync_svg__a" d="M3.75 15.75l3-3 3 3" />,
    <path
      className="home-to-cloud-sync_svg__a"
      d="M6.75 12.75v6a1.5 1.5 0 001.5 1.5h3M21.75 16.5v5.25a1.5 1.5 0 01-1.5 1.5h-4.5a1.5 1.5 0 01-1.5-1.5V16.5"
    />,
    <path
      className="home-to-cloud-sync_svg__a"
      d="M23.25 18l-4.72-4.719a.749.749 0 00-1.06 0L12.75 18M12 3.75a2.982 2.982 0 00-2.292 1.086A4.489 4.489 0 105.25 9.75H12a3 3 0 000-6zM18 23.25v-3"
    />
  );

export default SvgHomeToCloudSync;
