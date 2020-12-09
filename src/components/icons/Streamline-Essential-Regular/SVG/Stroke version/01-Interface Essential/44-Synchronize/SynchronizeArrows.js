import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrows = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrows_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrows_svg__a"
      d="M18.362 7A8.25 8.25 0 003.75 12.247V14.5M6 17.908a8.25 8.25 0 0014.25-5.661v-1.5"
    />,
    <circle
      className="synchronize-arrows_svg__a"
      cx={12}
      cy={12.247}
      r={2.25}
    />,
    <path
      className="synchronize-arrows_svg__a"
      d="M.75 11.497l3 3 3-3M23.25 13.747l-3-3-3 3"
    />
  );

export default SvgSynchronizeArrows;
