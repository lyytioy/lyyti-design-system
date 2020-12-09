import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDirectionButton3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".direction-button-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="direction-button-3_svg__a"
      d="M14.5 1.5a1 1 0 00-1-1h-3a1 1 0 00-1 1v5.584a1 1 0 00.293.707l1.5 1.5a1 1 0 001.414 0l1.5-1.5a1 1 0 00.293-.707V1.5zM22.5 14.5a1 1 0 001-1v-3a1 1 0 00-1-1h-5.586a1 1 0 00-.707.293l-1.5 1.5a1 1 0 000 1.414l1.5 1.5a1 1 0 00.707.293zM9.5 22.5a1 1 0 001 1h3a1 1 0 001-1v-5.588a1 1 0 00-.293-.707l-1.5-1.5a1 1 0 00-1.414 0l-1.5 1.5a1 1 0 00-.293.707V22.5zM1.5 9.5a1 1 0 00-1 1v3a1 1 0 001 1h6.072a1 1 0 00.79-.387l1.1-1.416a1 1 0 00-.083-1.32L7.792 9.791a1 1 0 00-.707-.291z"
    />
  );

export default SvgDirectionButton3;
