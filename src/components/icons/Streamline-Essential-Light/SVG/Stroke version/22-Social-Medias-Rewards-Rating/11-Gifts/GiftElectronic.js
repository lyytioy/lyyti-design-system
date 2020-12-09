import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGiftElectronic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gift-electronic_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gift-electronic_svg__a"
      d="M13.5 19.5H.5M7 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M7 21.25"
    />,
    <path
      className="gift-electronic_svg__a"
      d="M13.5 13.5v8a2 2 0 01-2 2h-9a2 2 0 01-2-2v-19a2 2 0 012-2h9a2 2 0 012 2v3"
    />,
    <rect
      className="gift-electronic_svg__a"
      x={15.5}
      y={6.5}
      width={8}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="gift-electronic_svg__a"
      d="M15.5 9.5h8M19.5 6.5v7M19.5 6.5s1-4.5 3-3.5c1.612.806-.5 3.5-3 3.5zM19.5 6.5s-1-4.5-3-3.5c-1.613.806.5 3.5 3 3.5zM13.5 10.5H10M13.5 7.5h-5M2.5 6.5v-2a1 1 0 011-1h2M11.5 5.5v-1a1 1 0 00-1-1h-2M2.5 13.5v2a1 1 0 001 1h2M11.5 13.5v2a1 1 0 01-1 1h-2"
    />
  );

export default SvgGiftElectronic;
