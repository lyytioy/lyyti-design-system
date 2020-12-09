import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-cash_svg__a"
      d="M20.5 13.906A4.313 4.313 0 0023 9.857a4.711 4.711 0 00-4.954-4.635A6.707 6.707 0 0012 1.5a6.605 6.605 0 00-6.675 6.108A3.561 3.561 0 001 11.017 3.186 3.186 0 003.5 14.3"
    />,
    <path
      className="cloud-cash_svg__a"
      d="M13.5 13.5h-2.033a1.342 1.342 0 00-.5 2.588l2.063.825a1.341 1.341 0 01-.5 2.587H10.5M12 20.5v-1M12 13.5v-1"
    />,
    <circle className="cloud-cash_svg__a" cx={12} cy={16.5} r={6} />
  );

export default SvgCloudCash;
