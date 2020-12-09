import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-heart_svg__a"
      d="M1.897 17.5l7.603.001M2.51 5.5h18.985M10.5 11.501L.509 11.5M11.377 23.484A11.5 11.5 0 1123.412 10.5M11.268.526c-6 6.5-5.891 14.958.109 22.958M12.729.526a15.837 15.837 0 014.424 9.974"
    />,
    <path
      className="network-heart_svg__a"
      d="M17.5 23.5l-5.114-5.335a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.025 3.025 0 01-.567 3.492z"
    />
  );

export default SvgNetworkHeart;
