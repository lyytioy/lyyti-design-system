import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudSmartphoneDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-smartphone-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-smartphone-download_svg__a"
      d="M19.5 19.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M9.75 20.25l3-3-3-3"
    />,
    <path
      className="cloud-smartphone-download_svg__a"
      d="M12.75 17.25h-6a1.5 1.5 0 01-1.5-1.5v-3M12 3.75a2.982 2.982 0 00-2.292 1.086A4.489 4.489 0 105.25 9.75H12a3 3 0 000-6z"
    />,
    <rect
      className="cloud-smartphone-download_svg__a"
      x={15.75}
      y={11.25}
      width={7.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgCloudSmartphoneDownload;
