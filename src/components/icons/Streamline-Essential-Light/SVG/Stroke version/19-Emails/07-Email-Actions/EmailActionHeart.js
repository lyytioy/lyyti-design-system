import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-heart_svg__a"
      d="M19.5 8.75l4 2.75V22a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 22V11.5l4-2.75"
    />,
    <path
      className="email-action-heart_svg__a"
      d="M3.5 20.5l5-4h7l5 4M23.5 11.5l-6 4M.5 11.5l6 4M19.5 14.167V1.5a1 1 0 00-1-1h-13a1 1 0 00-1 1v12.667"
    />,
    <path
      className="email-action-heart_svg__a"
      d="M12 11.5L8.591 7.944a2.018 2.018 0 01-.378-2.329 2.017 2.017 0 013.23-.524l.557.557.557-.557a2.017 2.017 0 013.23.524 2.018 2.018 0 01-.378 2.329z"
    />
  );

export default SvgEmailActionHeart;
