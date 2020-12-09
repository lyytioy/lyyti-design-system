import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSocialProfileNetwork = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".social-profile-network_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="social-profile-network_svg__a"
      d="M23.25 23.25l-3-4.5V13.5c0-2-3.8-4.139-5.25-5.25M16.93 14.794l-3.648-2.924a1.3 1.3 0 00-1.843 1.843l3.534 3.987v2.5c0 1.181 1.687 3.045 1.687 3.045M15 7.5v5.747M6 .75h4.5"
    />,
    <path
      className="social-profile-network_svg__a"
      d="M14.973 19.476a2.75 2.75 0 01-2.706 2.274H5.733A2.732 2.732 0 013 19.017V15M3 17.25h6"
    />,
    <circle
      className="social-profile-network_svg__a"
      cx={2.25}
      cy={10.5}
      r={1.5}
    />,
    <circle
      className="social-profile-network_svg__a"
      cx={2.25}
      cy={2.25}
      r={1.5}
    />,
    <circle
      className="social-profile-network_svg__a"
      cx={14.25}
      cy={3}
      r={2.25}
    />,
    <path
      className="social-profile-network_svg__a"
      d="M3.47 3.123l2.859 2.859M12.378 4.248l-2.33 1.553M3.668 10.011l2.74-1.565"
    />,
    <circle
      className="social-profile-network_svg__a"
      cx={8.25}
      cy={7.154}
      r={2.25}
    />
  );

export default SvgSocialProfileNetwork;
