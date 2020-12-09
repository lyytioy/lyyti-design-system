import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="network-heart_svg__a"
      d="M17.25 23.25l-5.114-5.334a3.025 3.025 0 01-.566-3.493 3.025 3.025 0 014.845-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.027 3.027 0 01-.567 3.493zM12 23.25a11.25 11.25 0 1111.146-12.784"
    />,
    <path
      className="network-heart_svg__a"
      d="M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M.775 11.25h9.523M2.999 5.25H21M2.048 17.25H8.25M14.711 1.079c1.348 1.978 2.3 5.386 2.5 9.359"
    />
  );

export default SvgNetworkHeart;
