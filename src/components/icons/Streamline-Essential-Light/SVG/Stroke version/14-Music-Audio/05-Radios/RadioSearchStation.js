import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioSearchStation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radio-search-station_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="radio-search-station_svg__a"
      x={1}
      y={8.5}
      width={22}
      height={15}
      rx={2}
      ry={2}
    />,
    <path
      className="radio-search-station_svg__a"
      d="M19 8.5v-5M19 .5v1M21 3.5h1M16 3.5h1M11 11.5v3M13.5 11.5h-8a1.5 1.5 0 000 3h8a1.5 1.5 0 000-3z"
    />,
    <circle
      className="radio-search-station_svg__a"
      cx={19.5}
      cy={13}
      r={1.5}
    />,
    <path
      className="radio-search-station_svg__a"
      d="M4 17.5v3M8 17.5v3M12 17.5v3M16 17.5v3M20 17.5v3"
    />
  );

export default SvgRadioSearchStation;
