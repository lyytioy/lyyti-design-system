import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileEps = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-eps_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="image-file-eps_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.475A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="image-file-eps_svg__a"
      d="M16.5.58V4.5a1 1 0 001 1h3.92M8.5 18.5h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2M5.5 15.5h2M13.5 14a1.5 1.5 0 01-1.5 1.5h-1.5v-3H12a1.5 1.5 0 011.5 1.5zM10.5 18.5v-3M18.5 12.5h-1.7a1.3 1.3 0 00-.723 2.387l1.84 1.226A1.3 1.3 0 0117.2 18.5h-1.7"
    />
  );

export default SvgImageFileEps;
