import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsFavorite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-favorite_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-favorite_svg__a"
      d="M15.043 10.58l3.3-3.368a2.824 2.824 0 00.7-1.714v-4a1 1 0 00-1-1l-4.258.007a2.786 2.786 0 00-1.708.708L1.25 12.041a1 1 0 000 1.414l4.835 4.836a.99.99 0 001.407-.007L9.043 16.7"
    />,
    <circle className="tags-favorite_svg__a" cx={15.543} cy={3.998} r={1.5} />,
    <path
      className="tags-favorite_svg__a"
      d="M17.043 23.5l-5.114-5.334a3.027 3.027 0 01-.567-3.493 3.026 3.026 0 014.846-.786l.835.836.835-.835a3.025 3.025 0 014.845.786 3.027 3.027 0 01-.567 3.493z"
    />
  );

export default SvgTagsFavorite;
