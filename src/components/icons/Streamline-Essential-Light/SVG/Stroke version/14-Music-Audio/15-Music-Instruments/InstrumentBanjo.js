import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentBanjo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-banjo_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-banjo_svg__a"
      d="M23.205 5.745l-1.061-1.061M21.791 7.159L20.73 6.098M19.316 1.856L18.255.795M17.902 3.27l-1.061-1.061M5.174 16.705l2.121 2.121"
    />,
    <circle
      className="instrument-banjo_svg__a"
      cx={7.295}
      cy={16.705}
      r={6.5}
    />,
    <path
      className="instrument-banjo_svg__a"
      d="M12.542 12.872l5.713-5.713a.5.5 0 01.707 0 .5.5 0 00.707 0L22.5 4.331a1 1 0 000-1.415L21.084 1.5a1 1 0 00-1.415 0l-2.828 2.831a.5.5 0 000 .707.5.5 0 010 .707l-5.713 5.713"
    />,
    <circle
      className="instrument-banjo_svg__a"
      cx={7.295}
      cy={16.705}
      r={4.5}
    />
  );

export default SvgInstrumentBanjo;
