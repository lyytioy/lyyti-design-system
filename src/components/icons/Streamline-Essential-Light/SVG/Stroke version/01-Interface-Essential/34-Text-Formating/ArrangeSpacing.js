import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArrangeSpacing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".arrange-spacing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="arrange-spacing_svg__a"
      d="M19.851 8L16.813.707a.339.339 0 00-.626 0L13.149 8M14.19 5.498h4.62M5.5 9.498v14M2.5 12.498l3-3 3 3M2.5 20.498l3 3 3-3M21.5 10.498h-10M19.851 21.5l-3.038-7.291a.339.339 0 00-.626 0L13.149 21.5M14.362 18.498h4.239M21.5 23.498h-10"
    />
  );

export default SvgArrangeSpacing;
