import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-heart_svg__a"
      d="M13.549 15A6.751 6.751 0 117.5 5.25M3 6.969V2.25A1.5 1.5 0 014.5.75H9"
    />,
    <path
      className="smart-watch-circle-heart_svg__a"
      d="M12 17.031v4.719a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.719M17.25 11.25l-5.113-5.335a3.025 3.025 0 01-.567-3.492 3.025 3.025 0 014.845-.786l.835.835.836-.835a3.025 3.025 0 014.845.786 3.025 3.025 0 01-.567 3.492z"
    />
  );

export default SvgSmartWatchCircleHeart;
