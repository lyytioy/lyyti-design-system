import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneRing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-ring_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="phone-ring_svg__a" d="M22 .5v6M19 6.5v13l-3.5 4" />,
    <path
      className="phone-ring_svg__a"
      d="M15 6.5a1 1 0 00-1 1v3a1 1 0 00.4.8l1.2.9a1 1 0 01.4.8v5.13a1 1 0 01-.241.651l-2.518 2.938a1 1 0 00-.241.651v.13a1 1 0 001 1h7a1 1 0 001-1v-16zM8.879 10.121a3 3 0 010-4.242M6.757 12.243a6 6 0 010-8.486M4.636 14.364a9 9 0 010-12.728"
    />
  );

export default SvgPhoneRing;
