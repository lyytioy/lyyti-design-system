import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionRecord1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-record-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="phone-action-record-1_svg__a"
      cx={15.5}
      cy={6.5}
      r={6}
    />,
    <circle
      className="phone-action-record-1_svg__a"
      cx={15.5}
      cy={6.5}
      r={2}
    />,
    <path
      className="phone-action-record-1_svg__a"
      d="M15.5 19.5h-13M9 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M9 21.25"
    />,
    <path
      className="phone-action-record-1_svg__a"
      d="M15.5 15v6.5a2 2 0 01-2 2h-9a2 2 0 01-2-2v-19a2 2 0 012-2h5"
    />
  );

export default SvgPhoneActionRecord1;
