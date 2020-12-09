import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-heart_svg__a"
      d="M14.25 14.25v6.268a2.732 2.732 0 01-2.733 2.732H4.983a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 014.983 2.25H6.75M2.25 18.75h12M15.75 11.25l-5.114-5.334a3.025 3.025 0 01-.566-3.493 3.025 3.025 0 014.845-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.027 3.027 0 01-.567 3.493z"
    />
  );

export default SvgPhoneActionHeart;
