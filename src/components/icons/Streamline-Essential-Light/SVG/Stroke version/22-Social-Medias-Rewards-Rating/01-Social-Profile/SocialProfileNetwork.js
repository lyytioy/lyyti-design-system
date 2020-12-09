import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSocialProfileNetwork = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".social-profile-network_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="social-profile-network_svg__a"
      d="M23.5 23.5l-3-4v-4.559c0-1.694-2.081-3.3-4-4.941M17.5 16.5l-2.25-2.25a1.061 1.061 0 00-1.5 0 1.248 1.248 0 000 1.5L16.5 19v1c0 1 2 3.5 2 3.5M16.5 9.5v6M7 3.5h5M5.5 10.5V8"
    />,
    <path
      className="social-profile-network_svg__a"
      d="M16.5 19.5v2a2 2 0 01-2 2h-7a2 2 0 01-2-2V18M16.5 19.5h-11"
    />,
    <path
      className="social-profile-network_svg__a"
      d="M11 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M11 21.25"
    />,
    <circle className="social-profile-network_svg__a" cx={2.5} cy={15} r={2} />,
    <circle
      className="social-profile-network_svg__a"
      cx={2.5}
      cy={2.5}
      r={2}
    />,
    <circle className="social-profile-network_svg__a" cx={17} cy={4.5} r={3} />,
    <path
      className="social-profile-network_svg__a"
      d="M4.142 3.642l4.163 4.163M14.625 6.333L12.813 8.75M4.295 14.117l4.096-2.34"
    />,
    <circle
      className="social-profile-network_svg__a"
      cx={10.25}
      cy={9.75}
      r={2.75}
    />
  );

export default SvgSocialProfileNetwork;
