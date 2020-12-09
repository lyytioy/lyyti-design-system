import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvChannelVan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-channel-van_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="modern-tv-channel-van_svg__a" cx={5} cy={21.49} r={2} />,
    <circle
      className="modern-tv-channel-van_svg__a"
      cx={19}
      cy={21.49}
      r={2}
    />,
    <path
      className="modern-tv-channel-van_svg__a"
      d="M7 21.5h10M3 21.5H1.5a1 1 0 01-1-1v-2.51a2.782 2.782 0 01.707-1.707L2.5 14.99 5 10.5h4.5v8.99M23.5 18.5a1 1 0 01-1 1h-13v-10a1 1 0 011-1h12a1 1 0 011 1zM19.891 5.381a3.434 3.434 0 01-4.87 0L19.891.51a3.435 3.435 0 010 4.871z"
    />,
    <path
      className="modern-tv-channel-van_svg__a"
      d="M19.891 5.381L22.5 8.5h-4.869l2.26-3.119zM17.442 2.969L15.63 1.158M12 11.49h3M13.5 11.49v6M20.5 11.49v1.5a7.5 7.5 0 01-1.5 4.5 7.5 7.5 0 01-1.5-4.5v-1.5M2.5 15h7"
    />
  );

export default SvgModernTvChannelVan;
