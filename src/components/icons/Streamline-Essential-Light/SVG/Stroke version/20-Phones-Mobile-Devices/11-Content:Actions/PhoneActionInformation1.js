import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionInformation1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-information-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-information-1_svg__a"
      d="M15.5 19.5h-13M9 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M9 21.25"
    />,
    <path
      className="phone-action-information-1_svg__a"
      d="M15.5 15.5v6a2 2 0 01-2 2h-9a2 2 0 01-2-2v-19a2 2 0 012-2h5"
    />,
    <circle
      className="phone-action-information-1_svg__a"
      cx={15.5}
      cy={6.5}
      r={6}
    />,
    <path
      className="phone-action-information-1_svg__a"
      d="M15.5 9.5V6a.5.5 0 00-.5-.5h-1M14.75 3a.25.25 0 11-.25.25.25.25 0 01.25-.25M14 9.5h3"
    />
  );

export default SvgPhoneActionInformation1;
