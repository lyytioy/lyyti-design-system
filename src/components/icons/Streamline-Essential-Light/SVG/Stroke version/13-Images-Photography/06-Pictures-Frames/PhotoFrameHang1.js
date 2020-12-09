import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhotoFrameHang1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".photo-frame-hang-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="photo-frame-hang-1_svg__a"
      x={0.5}
      y={5.5}
      width={23}
      height={18}
      rx={2}
      ry={2}
    />,
    <path
      className="photo-frame-hang-1_svg__a"
      d="M7 5.5l5-5 5 5M2.5 20.5h19M7.5 20.5a30.419 30.419 0 004.5-13 30.419 30.419 0 004.5 13M9.618 16.5h4.764M10 20.5a2 2 0 014 0"
    />,
    <ellipse
      className="photo-frame-hang-1_svg__a"
      cx={4.5}
      cy={18}
      rx={1}
      ry={2.5}
    />,
    <ellipse
      className="photo-frame-hang-1_svg__a"
      cx={19.5}
      cy={18}
      rx={1}
      ry={2.5}
    />
  );

export default SvgPhotoFrameHang1;
