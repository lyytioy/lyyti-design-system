import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationArrowsLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-arrows-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-arrows-left_svg__a"
      d="M16.5 16.4v5.307a.5.5 0 01-.87.336l-8.824-9.709a.5.5 0 010-.673l8.824-9.707a.5.5 0 01.87.336V7.6"
    />,
    <path
      className="navigation-arrows-left_svg__a"
      d="M21.63 1.956a.5.5 0 01.87.336v19.413a.5.5 0 01-.87.336l-8.824-9.707a.5.5 0 010-.673zM10.5 16.4v5.307a.5.5 0 01-.87.336L.806 12.334a.5.5 0 010-.673L9.63 1.954a.5.5 0 01.87.336V7.6"
    />
  );

export default SvgNavigationArrowsLeft;
