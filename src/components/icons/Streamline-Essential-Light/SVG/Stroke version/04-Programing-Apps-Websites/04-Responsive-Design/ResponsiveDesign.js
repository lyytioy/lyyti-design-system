import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesign = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design_svg__a"
      d="M8.5 19.5h7M12 17.5v2M3.5 14.5h12"
    />,
    <rect
      className="responsive-design_svg__a"
      x={0.5}
      y={0.5}
      width={6}
      height={9}
      rx={1}
      ry={1}
    />,
    <rect
      className="responsive-design_svg__a"
      x={17.5}
      y={14.5}
      width={6}
      height={9}
      rx={1}
      ry={1}
    />,
    <path
      className="responsive-design_svg__a"
      d="M17.5 21.5h6M17.5 16.5h6M8.5 5.5H19A1.5 1.5 0 0120.5 7v5.5M15.5 17.5H5A1.5 1.5 0 013.5 16v-4.5"
    />
  );

export default SvgResponsiveDesign;
