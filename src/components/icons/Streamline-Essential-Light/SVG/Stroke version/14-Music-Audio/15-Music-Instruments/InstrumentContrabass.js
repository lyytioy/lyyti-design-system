import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentContrabass = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-contrabass_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-contrabass_svg__a"
      d="M16.161 7.84a5.426 5.426 0 00-8.085.46 3.229 3.229 0 01-4.491 3.446 1 1 0 00-1.158.241 6.794 6.794 0 009.586 9.587 1 1 0 00.241-1.158 3.23 3.23 0 013.446-4.492 5.427 5.427 0 00.461-8.084zM11.208 12.792L23.25.75M.765 23.234L4.25 19.75M17.77 3.271l2.969 2.969M19.77 1.271l2.98 2.979M2.833 16.292a4.051 4.051 0 004.5-2.376M7.806 21.223a4.051 4.051 0 012.374-4.5"
    />
  );

export default SvgInstrumentContrabass;
