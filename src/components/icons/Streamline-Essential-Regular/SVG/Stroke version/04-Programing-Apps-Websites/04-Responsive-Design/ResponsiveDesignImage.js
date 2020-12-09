import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesignImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="responsive-design-image_svg__a"
      x={15.75}
      y={0.75}
      width={7.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="responsive-design-image_svg__a"
      d="M15.75 9.75h7.5M15.75 3.75h7.5M12.75 3.75H2.25a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-6M.75 8.25h12"
    />,
    <path
      className="responsive-design-image_svg__a"
      d="M6.461 12a.375.375 0 11-.375.375.375.375 0 01.375-.375M18 20.25l-3.87-5.837a.749.749 0 00-1.238-.014L10.9 17.25l-1.24-.989a.75.75 0 00-1.092.17L6.022 20.25M4.5 20.25H18"
    />
  );

export default SvgResponsiveDesignImage;
