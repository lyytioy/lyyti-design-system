import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-key_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-key_svg__a"
      cx={10}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-key_svg__a"
      d="M11.5 12.45c-.489.033-.99.051-1.5.051C4.754 12.5.5 10.71.5 8.5M9.5 17c-5.014-.113-9-1.859-9-4"
    />,
    <path
      className="database-key_svg__a"
      d="M9.5 21.5c-5.014-.109-9-1.855-9-3.995V4.5M19.5 4.501v5.5"
    />,
    <circle className="database-key_svg__a" cx={15.369} cy={19.501} r={1.25} />,
    <path
      className="database-key_svg__a"
      d="M19.048 17.942L23.5 13.5v-2h-2l-4.574 4.32a4 4 0 102.122 2.121z"
    />
  );

export default SvgDatabaseKey;
