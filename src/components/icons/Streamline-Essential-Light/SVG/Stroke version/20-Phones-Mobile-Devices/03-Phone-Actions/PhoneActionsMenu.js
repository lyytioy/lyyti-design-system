import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsMenu = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-menu_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-menu_svg__a"
      d="M7.492 9.514a2.006 2.006 0 000-2.83L5.369 4.563a2 2 0 00-2.828 0L1.378 5.727A3 3 0 001 9.5a46.536 46.536 0 0013 13 3 3 0 003.774-.379l1.164-1.164a2 2 0 000-2.828l-2.122-2.119a2 2 0 00-2.829 0l-.707.707a47.376 47.376 0 01-6.5-6.5zM15.5 1h8M15.5 5h8M15.5 9h8M12.5 1h1M12.5 5h1M12.5 9h1"
    />
  );

export default SvgPhoneActionsMenu;
