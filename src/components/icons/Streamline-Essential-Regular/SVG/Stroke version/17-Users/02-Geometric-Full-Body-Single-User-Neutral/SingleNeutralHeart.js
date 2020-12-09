import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-heart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-heart_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-heart_svg__cls-1"
      d="M7.5 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5zM17.25 11.25l-5.114-5.335a3.023 3.023 0 01-.566-3.492 3.025 3.025 0 014.845-.787l.835.835.835-.835a3.026 3.026 0 014.846.787 3.025 3.025 0 01-.567 3.492z"
    />
  );

export default SvgSingleNeutralHeart;
