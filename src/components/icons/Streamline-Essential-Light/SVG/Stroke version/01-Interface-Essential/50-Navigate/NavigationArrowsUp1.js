import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationArrowsUp1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-arrows-up-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-arrows-up-1_svg__a"
      d="M19.5 14.5h2.474a.5.5 0 00.393-.809L12.393 1a.5.5 0 00-.786 0L1.636 13.689a.5.5 0 00.393.809H4.5"
    />,
    <path
      className="navigation-arrows-up-1_svg__a"
      d="M21.971 22.5a.5.5 0 00.393-.809L12.393 9a.5.5 0 00-.786 0L1.636 21.689a.5.5 0 00.393.809z"
    />
  );

export default SvgNavigationArrowsUp1;
