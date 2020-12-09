import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="image-file-disable_svg__a" cx={6.5} cy={7.5} r={2} />,
    <path
      className="image-file-disable_svg__a"
      d="M12.322 10.815l-.4-.637a.5.5 0 00-.848 0L8.438 14.4l-1.076-1.722a.5.5 0 00-.848 0L3.5 17.5h5"
    />,
    <path
      className="image-file-disable_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <circle className="image-file-disable_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="image-file-disable_svg__a"
      d="M13.258 21.742l8.485-8.485"
    />
  );

export default SvgImageFileDisable;
