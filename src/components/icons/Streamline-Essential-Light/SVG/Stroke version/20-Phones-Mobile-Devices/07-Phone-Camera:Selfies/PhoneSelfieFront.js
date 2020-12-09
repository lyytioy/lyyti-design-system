import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneSelfieFront = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-selfie-front_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-selfie-front_svg__a"
      d="M15.58 14.971c-.258-.1-.524-.192-.8-.294-.565-.209-.472-1.684-.222-1.959a4.171 4.171 0 001.085-3.233A2.725 2.725 0 0013 6.5a2.725 2.725 0 00-2.645 2.985 4.171 4.171 0 001.085 3.233c.25.275.343 1.75-.222 1.959-2.09.774-3.754 1.323-4.153 2.123a7.089 7.089 0 00-.565 2.7h12M19.5 19.5h-13M13 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <path
      className="phone-selfie-front_svg__a"
      d="M19.5 15.086V4.5a2 2 0 00-2-2h-9a2 2 0 00-2 2v17a2 2 0 002 2h9a2 2 0 002-2v-2"
    />,
    <path
      className="phone-selfie-front_svg__a"
      d="M20.707 16.293l-1.5-1.5a1 1 0 00-1.414 1.414l1.707 1.706V20a2.414 2.414 0 00.707 1.707L22 23.5M19.5 12l2.293 2.293A2.414 2.414 0 0122.5 16v2a2.414 2.414 0 00.707 1.707L23.5 20M.5 2.5h1M2.5 1.5v-1M4.5 2.5h-1M2.5 3.5v1"
    />
  );

export default SvgPhoneSelfieFront;
