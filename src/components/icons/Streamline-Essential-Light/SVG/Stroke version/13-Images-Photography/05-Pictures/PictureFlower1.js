import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureFlower1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-flower-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="picture-flower-1_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="picture-flower-1_svg__a"
      d="M.5 19.5h23M11.5 8.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M11.5 15v4.5"
    />,
    <path
      className="picture-flower-1_svg__a"
      d="M15.305 8.979a4.548 4.548 0 00-.458-.229 4.548 4.548 0 00.458-.229c1.358-.784 2.078-2.081 1.608-2.9s-1.954-.84-3.313-.055a4.685 4.685 0 00-.426.281 4.7 4.7 0 00.031-.51c0-1.569-.764-2.841-1.7-2.841S9.8 3.772 9.8 5.341a4.7 4.7 0 00.031.51A4.685 4.685 0 009.4 5.57c-1.359-.785-2.842-.76-3.313.055s.25 2.112 1.608 2.9a4.548 4.548 0 00.458.229 4.548 4.548 0 00-.458.229c-1.358.784-2.078 2.081-1.608 2.9s1.954.84 3.313.055a4.685 4.685 0 00.426-.281 4.7 4.7 0 00-.031.51C9.8 13.728 10.559 15 11.5 15s1.705-1.272 1.705-2.841a4.7 4.7 0 00-.031-.51 4.685 4.685 0 00.426.281c1.359.785 2.842.76 3.313-.055s-.25-2.112-1.608-2.896z"
    />
  );

export default SvgPictureFlower1;
