import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHouse4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".house-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="house-4_svg__a" d="M1.5 9.744l10.5-9 10.5 9" />,
    <path
      className="house-4_svg__a"
      d="M12 5.244L3.377 12.61a1.186 1.186 0 00-.377.8v8.855a.981.981 0 00.978.978H9.75v-7.01a.491.491 0 01.489-.49h3.522a.491.491 0 01.489.49v7.01h5.772a.981.981 0 00.978-.977v-8.855a1.186 1.186 0 00-.377-.8z"
    />
  );

export default SvgHouse4;
