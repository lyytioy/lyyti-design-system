import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowLink = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-link_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-link_svg__a"
      d="M21.76 8.253v-6a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6M.76 5.253h21M17.265 19.382a2.282 2.282 0 01-.639 1.92l-1.292 1.292a2.416 2.416 0 01-3.415-3.414l1.292-1.292a2.276 2.276 0 011.878-.644M19.388 17.258a2.282 2.282 0 001.921-.639l1.291-1.292a2.416 2.416 0 00-3.414-3.414L17.9 13.205a2.272 2.272 0 00-.644 1.878M15.01 19.503l4.5-4.5"
    />
  );

export default SvgAppWindowLink;
