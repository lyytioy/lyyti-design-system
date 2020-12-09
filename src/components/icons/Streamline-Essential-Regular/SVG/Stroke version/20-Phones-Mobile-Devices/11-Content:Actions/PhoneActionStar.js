import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-star_svg__a"
      d="M13.875 15v5.518a2.732 2.732 0 01-2.733 2.732H4.608a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 014.608 2.25h2.517M1.875 18.75h12"
    />,
    <path
      className="phone-action-star_svg__a"
      d="M16.832 1.18L18.5 4.458h2.836a.777.777 0 01.559 1.328l-2.6 2.563 1.443 3.313a.786.786 0 01-1.119.982l-3.487-1.961-3.487 1.961a.786.786 0 01-1.119-.982l1.443-3.313-2.6-2.563a.777.777 0 01.559-1.328h2.836l1.654-3.278a.8.8 0 011.414 0z"
    />
  );

export default SvgPhoneActionStar;
