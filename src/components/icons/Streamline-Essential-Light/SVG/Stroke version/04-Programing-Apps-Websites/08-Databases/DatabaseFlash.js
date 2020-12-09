import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-flash_svg__a"
      cx={11.023}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-flash_svg__a"
      d="M12.523 12.45c-.489.033-.99.051-1.5.051-5.246 0-9.5-1.79-9.5-4M11.023 17c-5.246 0-9.5-1.79-9.5-4"
    />,
    <path
      className="database-flash_svg__a"
      d="M11.023 21.5c-5.246 0-9.5-1.79-9.5-4v-13M20.523 4.501v3.5M19.518 9.5l-5.91 7.382a.375.375 0 00.285.618h2.625v6l5.911-7.381a.375.375 0 00-.286-.618h-2.625z"
    />
  );

export default SvgDatabaseFlash;
