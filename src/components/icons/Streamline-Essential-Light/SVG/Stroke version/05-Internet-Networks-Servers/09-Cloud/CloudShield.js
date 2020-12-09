import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-shield_svg__a"
      d="M20.5 13.906A4.311 4.311 0 0023 9.857a4.711 4.711 0 00-4.954-4.635A6.706 6.706 0 0012 1.5a6.605 6.605 0 00-6.675 6.109A3.561 3.561 0 001 11.018 3.186 3.186 0 003.5 14.3M12 12.5v6M15 15.5H9"
    />,
    <path
      className="cloud-shield_svg__a"
      d="M12.535 22.4l.553-.211c2.63-1 4.912-3.523 4.912-6.337v-3.396a1.044 1.044 0 00-.628-.958 15.814 15.814 0 00-5.394-1 15.528 15.528 0 00-5.351 1 1.044 1.044 0 00-.627.958v3.393c0 2.814 2.238 5.336 4.868 6.338l.553.211a1.566 1.566 0 001.114.002z"
    />
  );

export default SvgCloudShield;
