import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneLandline = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-landline_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-landline_svg__a"
      d="M21 2.909a3.087 3.087 0 012.5 2.91v2a2.179 2.179 0 01-2 2.181h-3a2.179 2.179 0 01-2-2.181v-1.5a46.029 46.029 0 00-9 0v1.5A2.179 2.179 0 015.5 10h-3a2.179 2.179 0 01-2-2.181v-2A3.087 3.087 0 013 2.909a45 45 0 0118 0zM19.5 12v8a2.005 2.005 0 01-2 2h-11a2.005 2.005 0 01-2-2v-8"
    />,
    <path
      className="phone-landline_svg__a"
      d="M8.25 13a.25.25 0 11-.25.25.25.25 0 01.25-.25M12 13a.25.25 0 11-.25.25A.25.25 0 0112 13M8.25 16a.25.25 0 11-.25.25.25.25 0 01.25-.25M12 16a.25.25 0 11-.25.25A.25.25 0 0112 16M8.25 19a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.75 13a.25.25 0 10.25.25.25.25 0 00-.25-.25M15.75 16a.25.25 0 10.25.25.25.25 0 00-.25-.25M15.75 19a.25.25 0 10.25.25.25.25 0 00-.25-.25M12 19a.25.25 0 11-.25.25A.25.25 0 0112 19"
    />
  );

export default SvgPhoneLandline;
