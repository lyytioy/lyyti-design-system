import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneRetro = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-retro_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-retro_svg__a"
      d="M21.49 11.279a9.75 9.75 0 11-18.979 0M4.285 1.49h-.011A4.5 4.5 0 00.75 5.885v.89a1.5 1.5 0 001.5 1.5H6a1.5 1.5 0 001.5-1.5 1.5 1.5 0 011.5-1.5h6a1.5 1.5 0 011.5 1.5 1.5 1.5 0 001.5 1.5h3.75a1.5 1.5 0 001.5-1.5v-.89a4.5 4.5 0 00-3.524-4.393h-.011a40.593 40.593 0 00-15.43-.002zM15.75 17.275l4.5 4.5"
    />,
    <circle className="phone-retro_svg__a" cx={12} cy={13.525} r={2.25} />,
    <path
      className="phone-retro_svg__a"
      d="M6 13.15a.375.375 0 10.375.375A.375.375 0 006 13.15M12 19.15a.375.375 0 10.375.375.375.375 0 00-.375-.375M7.757 17.393a.375.375 0 10.375.375.375.375 0 00-.375-.375M18 13.15a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgPhoneRetro;
