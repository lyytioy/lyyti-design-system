import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensShade1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lens-shade-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="lens-shade-1_svg__a"
      d="M8 18.5h8v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zM14.07.5a1.281 1.281 0 011.243.97l.763 3.054a.851.851 0 001.552.235l1.121-1.845a.86.86 0 011.584.588l-.669 4.012A1.179 1.179 0 0118.5 8.5h-13a1.179 1.179 0 01-1.164-.986L3.667 3.5a.86.86 0 011.584-.588l1.121 1.847a.851.851 0 001.552-.235l.763-3.054A1.281 1.281 0 019.93.5z"
    />,
    <path
      className="lens-shade-1_svg__a"
      d="M6 8.5h12v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2zM9 8.5v3M12 8.5v3M15 8.5v3M7 11.5h10v6a1 1 0 01-1 1H8a1 1 0 01-1-1v-6zM10.5 18.5v3M13.5 18.5v3M9 21.5v1a1 1 0 001 1h4a1 1 0 001-1v-1"
    />
  );

export default SvgLensShade1;
