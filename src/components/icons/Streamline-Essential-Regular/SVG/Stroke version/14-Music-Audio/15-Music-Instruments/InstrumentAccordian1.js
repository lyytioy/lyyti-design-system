import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentAccordian1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-accordian-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-accordian-1_svg__a"
      d="M9 22.1l-5.218.019A3.018 3.018 0 01.75 19.126V6.384a2.98 2.98 0 012.965-3.011L9 3.354zM9 7.117H4.5M9 10.867H4.5M9 14.617H4.5M9 18.367H4.5M12 .75v22.5M15.75 2.25v19.5M19.5.75v22.5M23.25 2.25v19.5"
    />
  );

export default SvgInstrumentAccordian1;
