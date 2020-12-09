import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="database-upload_svg__a"
      d="M19.523 4.526c0 2.205-4.254 4-9.5 4s-9.5-1.795-9.5-4S4.777.5 10.023.5s9.5 1.815 9.5 4.026zM10.023 12.526c-5.246 0-9.5-1.795-9.5-4M8.523 16.975c-4.533-.3-8-1.958-8-3.949"
    />,
    <path
      className="database-upload_svg__a"
      d="M9.023 21.493c-4.776-.212-8.5-1.9-8.5-3.967V4.5M19.523 4.501v4.5"
    />,
    <circle className="database-upload_svg__a" cx={17.518} cy={17.501} r={6} />,
    <path
      className="database-upload_svg__a"
      d="M17.518 20.501v-6M17.518 14.501l-2.25 2.25M17.518 14.501l2.25 2.25"
    />
  );

export default SvgDatabaseUpload;
