import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapVerticalExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-vertical-expand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-vertical-expand_svg__a"
      d="M12.109 22.5l-3.79-3.093a1.639 1.639 0 01-.566-1.676 1.639 1.639 0 012.321-1.068l1.175.587V10.5a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5V15l1.993.333a3 3 0 012.507 2.959V22.5M3.748 3.748l-3 3 3 3M20.248 3.748l3.001 3-3.001 3M16.724 9a5.243 5.243 0 10-8.476 1.417"
    />
  );

export default SvgGestureTapVerticalExpand;
