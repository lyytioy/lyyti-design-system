import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-image_svg__a"
      d="M22 4.5H9a1 1 0 01-.72-.306L6.938 2.806a1 1 0 00-.72-.306H2.786A1.286 1.286 0 001.5 3.786V15.5"
    />,
    <rect
      className="folder-image_svg__a"
      x={4.5}
      y={7.5}
      width={18}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="folder-image_svg__a"
      d="M8 18.5l2.45-3.151a1 1 0 011.274-.206L13.5 16.5l1.663-2.14a1 1 0 011.587.067L19.5 18.5z"
    />,
    <circle className="folder-image_svg__a" cx={9.5} cy={11} r={1.5} />
  );

export default SvgFolderImage;
