import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneBroken = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-broken_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-broken_svg__a"
      d="M18.5 4.5h-13M18.5 19.5h-13M9.5 2.5h5M16 13.036l-3 2.152-4-2.152-3.5 2.128V21.5a2 2 0 002 2h9a2 2 0 002-2v-7.571zM8.766 9.063l4.211 2L16.082 8.5l2.418.809V2.5a2 2 0 00-2-2h-9a2 2 0 00-2 2v8.51zM3 12H.5M3 9.5L.5 7M3 14.5L.5 17M21 12h2.5M21 9.5L23.5 7M21 14.5l2.5 2.5"
    />,
    <path
      className="phone-broken_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />
  );

export default SvgPhoneBroken;
