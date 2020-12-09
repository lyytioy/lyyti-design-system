import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-warning_svg__a"
      d="M1.898 17.499H11M2.512 5.499h18.984M12.5 11.5L.511 11.499M8.5 22.958a11.5 11.5 0 1115-11.458M11.269.525C5.888 6.356 5.42 13.761 9.711 21M12.73.525A16.018 16.018 0 0117.066 9.5M17.5 20.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 18.5v-3"
    />,
    <path
      className="network-warning_svg__a"
      d="M18.338 12.5a.95.95 0 00-1.676 0l-5.056 9.635a.923.923 0 00.031.914.948.948 0 00.807.448h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914z"
    />
  );

export default SvgNetworkWarning;
