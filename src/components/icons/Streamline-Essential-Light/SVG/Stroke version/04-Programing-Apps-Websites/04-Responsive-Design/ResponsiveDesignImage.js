import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesignImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design-image_svg__a"
      d="M21.5 13.5v8a2 2 0 01-2 2h-17a2 2 0 01-2-2v-14a2 2 0 012-2h12M.5 10.5h14"
    />,
    <path
      className="responsive-design-image_svg__a"
      d="M4.25 7.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M7.25 7.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M10.25 7.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M16 21.5l-2.565-6.413a.5.5 0 00-.92-.021L10.5 19.5l-2.049-2.459a.5.5 0 00-.813.063L5 21.5z"
    />,
    <circle
      className="responsive-design-image_svg__a"
      cx={4.5}
      cy={14}
      r={1.5}
    />,
    <rect
      className="responsive-design-image_svg__a"
      x={16.5}
      y={0.5}
      width={7}
      height={11}
      rx={1}
      ry={1}
    />,
    <path
      className="responsive-design-image_svg__a"
      d="M16.5 9.5h7M16.5 2.5h7"
    />
  );

export default SvgResponsiveDesignImage;
