import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-warning_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-warning_svg__cls-1"
      d="M17.5 20.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 18.5v-3"
    />,
    <path
      className="single-man-actions-warning_svg__cls-1"
      d="M18.338 12.5a.949.949 0 00-1.676 0l-5.056 9.634a.923.923 0 00.031.914.948.948 0 00.807.448h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914zM11.5 16.5H.5c.423-2.286.353-3.579 1.609-4.118L6.5 10.5v-2s-.945-.349-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.429.422-2 .491-2 5.331-2 5.822 0a2.628 2.628 0 01-.44 2c.951 0 .691 2 .007 2 0 2.151-.866 2.5-.866 2.5v2l3 1.286"
    />
  );

export default SvgSingleManActionsWarning;
