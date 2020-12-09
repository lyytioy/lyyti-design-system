import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureStackHuman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-stack-human_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="picture-stack-human_svg__a"
      x={0.5}
      y={4.5}
      width={15}
      height={15}
      rx={4}
      ry={4}
    />,
    <path
      className="picture-stack-human_svg__a"
      d="M14.383 18.266a5.406 5.406 0 00-.448-1.465c-.4-.8-2.063-1.35-4.153-2.123-.565-.21-.472-1.685-.222-1.961a4.168 4.168 0 001.085-3.232A2.725 2.725 0 008 6.5a2.725 2.725 0 00-2.645 2.985 4.168 4.168 0 001.085 3.232c.25.276.343 1.751-.222 1.961-2.09.773-3.754 1.322-4.153 2.122a5.406 5.406 0 00-.448 1.465M16.5 19.357a4 4 0 003-3.857v-7a4.006 4.006 0 00-3-3.857M20.5 19.357a4 4 0 003-3.857v-7a4.006 4.006 0 00-3-3.857"
    />
  );

export default SvgPictureStackHuman;
