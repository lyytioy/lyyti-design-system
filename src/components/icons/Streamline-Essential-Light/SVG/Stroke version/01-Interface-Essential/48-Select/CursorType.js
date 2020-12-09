import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-type_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-type_svg__a"
      d="M21.5 23.5h1a1 1 0 001-1v-1M5.5 23.5h-1a1 1 0 01-1-1v-1M18.5 23.498H15M12 23.498H8.5M21.5 3.5h1a1 1 0 011 1v1M18.5 3.498H15M23.5 18.498v-3.5M23.5 11.998v-3.5M3.5 18.498v-3.5M16.5 9.578v9.34M13.5 8.578a2.925 2.925 0 013 1M19.5 8.578a2.925 2.925 0 00-3 1M13.5 19.918a2.925 2.925 0 003-1M19.5 19.918a2.925 2.925 0 01-3-1M14.5 15.998h4M6.124 6.123l4.144-1.036a.5.5 0 00.062-.951L1.184.533a.5.5 0 00-.649.649l3.6 9.145a.5.5 0 00.951-.062z"
    />
  );

export default SvgCursorType;
