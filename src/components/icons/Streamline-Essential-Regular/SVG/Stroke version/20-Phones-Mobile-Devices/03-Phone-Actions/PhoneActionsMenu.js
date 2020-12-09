import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsMenu = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-menu_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-menu_svg__a"
      d="M12.37 21.79l.01.007a4.5 4.5 0 005.6-.615l.629-.629a1.5 1.5 0 000-2.122l-2.653-2.651a1.5 1.5 0 00-2.122 0 1.5 1.5 0 01-2.121 0l-4.242-4.243a1.5 1.5 0 010-2.121 1.5 1.5 0 000-2.122L4.819 4.643a1.5 1.5 0 00-2.121 0l-.63.629a4.5 4.5 0 00-.614 5.6l.006.01A40.606 40.606 0 0012.37 21.79zM17.25 1.5h6M17.25 6h6M17.25 10.5h6M12.75 1.5h1.5M12.75 6h1.5M12.75 10.5h1.5"
    />
  );

export default SvgPhoneActionsMenu;
