import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-add_svg__a"
      d="M9.479 20.485h-8a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v5M4.479 4.485v-4M8.479 4.485v-4M12.479 4.485v-4"
    />,
    <circle className="notes-add_svg__a" cx={17.479} cy={17.485} r={6} />,
    <path className="notes-add_svg__a" d="M17.479 14.485v6M20.479 17.485h-6" />
  );

export default SvgNotesAdd;
