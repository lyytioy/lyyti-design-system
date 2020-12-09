import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-heart_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <rect
      className="phone-action-heart_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-heart_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M12 15.5l-3.409-3.556a2.018 2.018 0 01-.378-2.329 2.017 2.017 0 013.23-.524l.557.557.557-.557a2.017 2.017 0 013.23.524 2.018 2.018 0 01-.378 2.329z"
    />
  );

export default SvgPhoneActionHeart;
