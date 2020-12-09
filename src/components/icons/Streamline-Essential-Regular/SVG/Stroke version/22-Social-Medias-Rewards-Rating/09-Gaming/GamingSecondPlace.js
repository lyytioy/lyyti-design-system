import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGamingSecondPlace = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gaming-second-place_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gaming-second-place_svg__a"
      d="M12.729 1.2l3.346 6.629 6.44.638a.805.805 0 01.5 1.374l-5.3 5.253 1.965 7.138a.813.813 0 01-1.151.935L12 19.933l-6.52 3.229a.813.813 0 01-1.151-.935l1.965-7.138L.99 9.836a.805.805 0 01.5-1.374l6.44-.638L11.271 1.2a.819.819 0 011.458 0zM13.5 16.499v-6"
    />,
    <path
      className="gaming-second-place_svg__a"
      d="M13.5 10.5H15a1.5 1.5 0 010 3h-1.5M8.25 12a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 2.141 2.141 0 01-.468 1.336L8.25 16.5h3"
    />
  );

export default SvgGamingSecondPlace;
