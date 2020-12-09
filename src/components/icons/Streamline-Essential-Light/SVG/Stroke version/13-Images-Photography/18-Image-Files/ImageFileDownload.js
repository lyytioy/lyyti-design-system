import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="image-file-download_svg__a" cx={6.5} cy={7.5} r={2} />,
    <path
      className="image-file-download_svg__a"
      d="M12.544 11.17l-.62-.992a.5.5 0 00-.848 0L8.438 14.4l-1.076-1.722a.5.5 0 00-.848 0L3.5 17.5h5"
    />,
    <path
      className="image-file-download_svg__a"
      d="M10.5 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V9.5"
    />,
    <circle className="image-file-download_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="image-file-download_svg__a"
      d="M17.5 14.5v6M17.5 20.5l-2.25-2.25M17.5 20.5l2.25-2.25"
    />
  );

export default SvgImageFileDownload;
