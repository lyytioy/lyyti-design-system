import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-heart_svg__a"
      d="M12 14l-3.409-3.553a2.017 2.017 0 01-.378-2.328 2.017 2.017 0 013.23-.524l.557.557.557-.557a2.017 2.017 0 013.23.524 2.017 2.017 0 01-.378 2.328zM21.306 20.5H2.694a2 2 0 01-1.973-1.667L.5 17.5h23l-.221 1.329a2 2 0 01-1.973 1.671z"
    />,
    <path
      className="laptop-heart_svg__a"
      d="M2.5 3.5h19a1 1 0 011 1v13h-21v-13a1 1 0 011-1z"
    />
  );

export default SvgLaptopHeart;
