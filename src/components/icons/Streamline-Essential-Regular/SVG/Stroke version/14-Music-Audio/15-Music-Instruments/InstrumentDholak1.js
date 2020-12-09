import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentDholak1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-dholak-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <ellipse
      className="instrument-dholak-1_svg__a"
      cx={12}
      cy={5.25}
      rx={10.5}
      ry={4.5}
    />,
    <path
      className="instrument-dholak-1_svg__a"
      d="M22.5 5.25v1.5A10.5 10.5 0 0112 17.25 10.5 10.5 0 011.5 6.75v-1.5M12 17.25v6M6.713 15.824L3 23.25M17.287 15.824L21 23.25M12 9.75V12M18.75 8.697V10.5M5.25 8.697V10.5"
    />
  );

export default SvgInstrumentDholak1;
