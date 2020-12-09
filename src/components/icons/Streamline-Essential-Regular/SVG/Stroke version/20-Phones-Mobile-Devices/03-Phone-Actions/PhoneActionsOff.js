import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-off_svg__a"
      d="M10.815 18.305a34.236 34.236 0 004.064 3.031l.011.007a5.137 5.137 0 006.39-.7l.72-.72a1.713 1.713 0 000-2.423l-3.027-3.027a1.713 1.713 0 00-2.421 0 1.712 1.712 0 01-2.422 0M9.287 9.632a1.711 1.711 0 010-2.421 1.713 1.713 0 000-2.421L6.26 1.763a1.713 1.713 0 00-2.421 0l-.719.719a5.135 5.135 0 00-.7 6.389l.007.012a34.343 34.343 0 002.8 3.8M23.25.75L.75 23.25"
    />
  );

export default SvgPhoneActionsOff;
