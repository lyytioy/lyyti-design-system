import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerChipSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-chip-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="computer-chip-search_svg__a"
      x={2.25}
      y={3}
      width={9}
      height={9}
      rx={1.125}
      ry={1.125}
    />,
    <path
      className="computer-chip-search_svg__a"
      d="M2.25 9H.75M2.25 5.25H.75M12.75 9h-1.5M12.75 5.25h-1.5M4.5 3V.75M9 3V.75M4.875 13.5V12M8.625 13.5V12M8.25 9H6M14.327 2.79a9 9 0 11-10.98 12.77M17.226 17.979l6.024 5.271"
    />
  );

export default SvgComputerChipSearch;
