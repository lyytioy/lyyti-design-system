import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentXylophone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-xylophone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-xylophone_svg__a"
      d="M15.446 19.894L1.752 23.467A1 1 0 01.5 22.5v-21A1 1 0 011.752.533l21 5.478a1 1 0 01.748.968v10.043a1 1 0 01-.748.966l-2.25.587M6.5 22.228V1.772M12.5 20.663V16.5M12.5 6.5V3.337M18.5 14.991V4.902"
    />,
    <circle className="instrument-xylophone_svg__a" cx={12} cy={11.5} r={3} />,
    <path
      className="instrument-xylophone_svg__a"
      d="M13.862 13.852L21.5 23.5M3.5 3.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M9.5 4.711a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.5 6.167a.25.25 0 11-.25.25.25.25 0 01.25-.25M21 7.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M3.5 20.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M9.5 18.789a.25.25 0 10.25.25.25.25 0 00-.25-.25M21 16a.25.25 0 10.25.25A.25.25 0 0021 16"
    />
  );

export default SvgInstrumentXylophone;
