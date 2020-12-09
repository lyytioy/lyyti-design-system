import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-share_svg__a"
      d="M15 13.5v7.018a2.732 2.732 0 01-2.733 2.732H5.733A2.732 2.732 0 013 20.518V4.983A2.733 2.733 0 015.733 2.25H10.5M3 18.75h12"
    />,
    <circle
      className="phone-action-share_svg__a"
      cx={11.25}
      cy={7.5}
      r={2.25}
    />,
    <circle
      className="phone-action-share_svg__a"
      cx={18.75}
      cy={10.5}
      r={2.25}
    />,
    <circle className="phone-action-share_svg__a" cx={18.75} cy={3} r={2.25} />,
    <path
      className="phone-action-share_svg__a"
      d="M13.175 6.345l3.65-2.19M13.338 8.335l3.324 1.33"
    />
  );

export default SvgPhoneActionShare;
