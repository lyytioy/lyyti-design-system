import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditCameraMeasure = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-camera-measure_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-camera-measure_svg__a"
      d="M17.506 8V4.182a1.67 1.67 0 00-1.5-1.682h-2.987a.5.5 0 01-.338-.131L10.785.631A.5.5 0 0010.448.5H7.565a.5.5 0 00-.338.131l-1.9 1.738a.5.5 0 01-.337.131H2.006a1.671 1.671 0 00-1.5 1.682V13a1.5 1.5 0 001.5 1.5h10.5"
    />,
    <circle
      className="video-edit-camera-measure_svg__a"
      cx={9.006}
      cy={8}
      r={3.5}
    />,
    <path
      className="video-edit-camera-measure_svg__a"
      d="M3.256 5.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M23.494 11.5h-8a1 1 0 000 2h2.5l2.5-2M16.494 11.5v-1M23.494 19.5h-8a1 1 0 010-2h2.5l2.5 2M16.494 19.5v1M20.494 13.5h3M20.494 15.5h3M20.494 17.5h3M22.494 19.5v4M22.494 22.5h-2"
    />
  );

export default SvgVideoEditCameraMeasure;
