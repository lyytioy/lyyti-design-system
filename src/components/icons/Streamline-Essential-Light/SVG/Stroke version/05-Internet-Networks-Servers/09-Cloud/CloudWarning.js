import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-warning_svg__a"
      d="M20.5 13.906A4.311 4.311 0 0023 9.857a4.711 4.711 0 00-4.954-4.635A6.706 6.706 0 0012 1.5a6.605 6.605 0 00-6.675 6.109A3.561 3.561 0 001 11.018 3.186 3.186 0 003.5 14.3M12 19.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M12 17.5v-3"
    />,
    <path
      className="cloud-warning_svg__a"
      d="M12.838 11.5a.95.95 0 00-1.676 0l-5.056 9.637a.923.923 0 00.031.914.947.947 0 00.807.449h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914z"
    />
  );

export default SvgCloudWarning;
