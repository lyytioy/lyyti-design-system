import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-remove_svg__a"
      d="M9.559 20.5h-8a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v5M4.559 4.501v-4M8.559 4.501v-4M12.559 4.501v-4"
    />,
    <circle className="notes-remove_svg__a" cx={17.559} cy={17.501} r={6} />,
    <path
      className="notes-remove_svg__a"
      d="M19.68 15.38l-4.242 4.242M19.68 19.622l-4.242-4.242"
    />
  );

export default SvgNotesRemove;
