import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudSmartphoneDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-smartphone-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-smartphone-download_svg__a"
      d="M20.5 13.906A4.311 4.311 0 0023 9.857a4.711 4.711 0 00-4.954-4.635A6.706 6.706 0 0012 1.5a6.605 6.605 0 00-6.675 6.109A3.561 3.561 0 001 11.018 3.186 3.186 0 003.5 14.3"
    />,
    <path
      className="cloud-smartphone-download_svg__a"
      d="M9 11.5h6a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1v-9a1 1 0 011-1z"
    />,
    <path
      className="cloud-smartphone-download_svg__a"
      d="M12 19.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M12 4v5.5M14.5 7L12 9.5 9.5 7"
    />
  );

export default SvgCloudSmartphoneDownload;
