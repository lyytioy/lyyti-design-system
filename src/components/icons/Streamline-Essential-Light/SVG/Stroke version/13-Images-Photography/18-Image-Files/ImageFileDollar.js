import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileDollar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-dollar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="image-file-dollar_svg__a" cx={6.5} cy={7.5} r={2} />,
    <path
      className="image-file-dollar_svg__a"
      d="M12.544 11.17l-.62-.992a.5.5 0 00-.848 0L8.438 14.4l-1.076-1.722a.5.5 0 00-.848 0L3.5 17.5h5"
    />,
    <path
      className="image-file-dollar_svg__a"
      d="M10.5 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V9.5"
    />,
    <path
      className="image-file-dollar_svg__a"
      d="M19 14.5h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H16M17.5 21.5v-1M17.5 14.5v-1"
    />,
    <circle className="image-file-dollar_svg__a" cx={17.5} cy={17.5} r={6} />
  );

export default SvgImageFileDollar;
