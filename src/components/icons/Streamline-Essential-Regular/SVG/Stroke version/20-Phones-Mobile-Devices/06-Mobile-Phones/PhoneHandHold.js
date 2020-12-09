import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneHandHold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-hand-hold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-hand-hold_svg__a"
      d="M19.011 12.6l.473-.117a2.332 2.332 0 001.709-2.822L19.8 4a2.332 2.332 0 00-2.822-1.709l-.968.238M7.011 4.737l-2.495.613a2.333 2.333 0 00-1.709 2.823L4.2 13.838a2.333 2.333 0 002.822 1.709l6.494-1.6M7.34 10.258l1.21 4.913"
    />,
    <path
      className="phone-hand-hold_svg__a"
      d="M14.758 6.824l-6 1a1.5 1.5 0 01-1.747-1.48V3.385a1.5 1.5 0 011.254-1.479l6-1a1.5 1.5 0 011.746 1.48v2.958a1.5 1.5 0 01-1.253 1.48zM16.011 23.115V21.24a5.61 5.61 0 01.232-1.6 2.986 2.986 0 011.623-1.924 1.876 1.876 0 001.145-1.728v-5.623a1.5 1.5 0 10-3 0v2.25a3 3 0 00-3 3M8.511 23.115V21.24a5.61 5.61 0 00-.232-1.6 2.986 2.986 0 00-1.623-1.924 1.876 1.876 0 01-1.145-1.726v-.583"
    />
  );

export default SvgPhoneHandHold;
