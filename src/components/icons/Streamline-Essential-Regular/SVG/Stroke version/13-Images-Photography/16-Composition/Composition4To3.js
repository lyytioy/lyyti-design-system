import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComposition4To3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-4-to-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="composition-4-to-3_svg__a"
      x={0.75}
      y={5.25}
      width={22.5}
      height={13.5}
      rx={3}
      ry={3}
    />,
    <path
      className="composition-4-to-3_svg__a"
      d="M15.75 9.75a1.5 1.5 0 011.5-1.5l1.135.005A1.873 1.873 0 0118.377 12a1.873 1.873 0 01.008 3.745l-1.135.005a1.5 1.5 0 01-1.5-1.5M8.25 15.735v-1.5M8.25 14.235V8.25a8.26 8.26 0 00-4.481 5.985H8.25M12 9.375a.375.375 0 11-.375.375.375.375 0 01.375-.375M12 13.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgComposition4To3;
