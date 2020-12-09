import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHomeToCloudSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".home-to-cloud-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="home-to-cloud-sync_svg__a"
      d="M4.5 13.522l2-2 2 2M12.5 16.397v7.125h9v-7.125"
    />,
    <path
      className="home-to-cloud-sync_svg__a"
      d="M11 17.522l6-4.5 6 4.5M10.834 9.522h.927A3.121 3.121 0 0014.5 6.477a3.038 3.038 0 00-3.153-3.037 4.254 4.254 0 00-8.095 1.565A2.283 2.283 0 00.5 7.239a2.312 2.312 0 002.435 2.283h7.9zM6.5 11.522v8a2 2 0 002 2h2M18.5 23.522h-3v-3a1.5 1.5 0 013 0z"
    />
  );

export default SvgHomeToCloudSync;
