import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneLandline = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-landline_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-landline_svg__a"
      d="M4.285 2.24h-.011A4.5 4.5 0 00.75 6.635v.89a1.5 1.5 0 001.5 1.5H6a1.5 1.5 0 001.5-1.5 1.5 1.5 0 011.5-1.5h6a1.5 1.5 0 011.5 1.5 1.5 1.5 0 001.5 1.5h3.75a1.5 1.5 0 001.5-1.5v-.89a4.5 4.5 0 00-3.524-4.393h-.011a40.593 40.593 0 00-15.43-.002zM3.75 12.025v6a4.5 4.5 0 004.5 4.5h7.5a4.5 4.5 0 004.5-4.5v-6M7.875 13.525"
    />,
    <path
      className="phone-landline_svg__a"
      d="M7.875 13.525a.375.375 0 10.375.375.375.375 0 00-.375-.375M12 13.525a.375.375 0 10.375.375.375.375 0 00-.375-.375M16.125 13.525a.375.375 0 10.375.375.375.375 0 00-.375-.375M7.875 17.275a.375.375 0 10.375.375.375.375 0 00-.375-.375M12 17.275a.375.375 0 10.375.375.375.375 0 00-.375-.375M16.125 17.275a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgPhoneLandline;
