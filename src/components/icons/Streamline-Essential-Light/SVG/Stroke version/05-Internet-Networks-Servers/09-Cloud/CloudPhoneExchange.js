import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudPhoneExchange = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-phone-exchange_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-phone-exchange_svg__a"
      d="M18.5 13.5v2.25a3.749 3.749 0 01-3.75 3.75H13"
    />,
    <path
      className="cloud-phone-exchange_svg__a"
      d="M16.5 15.5l2-2 2 2M14.5 21L13 19.5l1.5-1.5M18.869 10.5A3.612 3.612 0 0022 6.927a3.515 3.515 0 00-3.6-3.563A4.857 4.857 0 0014 .5a4.922 4.922 0 00-4.855 4.7A2.628 2.628 0 006 7.821 2.659 2.659 0 008.782 10.5zM3 13.5h5a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8a1 1 0 011-1z"
    />,
    <path
      className="cloud-phone-exchange_svg__a"
      d="M5.5 20.75a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgCloudPhoneExchange;
