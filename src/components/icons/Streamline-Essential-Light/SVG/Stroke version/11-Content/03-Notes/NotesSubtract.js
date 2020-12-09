import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesSubtract = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-subtract_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-subtract_svg__a"
      d="M9.531 20.5h-8a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v5M4.531 4.501v-4M8.531 4.501v-4M12.531 4.501v-4"
    />,
    <circle className="notes-subtract_svg__a" cx={17.531} cy={17.501} r={6} />,
    <path className="notes-subtract_svg__a" d="M20.531 17.501h-6" />
  );

export default SvgNotesSubtract;
