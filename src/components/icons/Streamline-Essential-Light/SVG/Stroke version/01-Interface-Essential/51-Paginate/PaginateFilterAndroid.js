import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterAndroid = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-android_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paginate-filter-android_svg__a"
      d="M18.5 17.5a1 1 0 001-1v-4h-12v4a1 1 0 001 1zM10.076 5.497l-1.875-2M17.062 5.497l1.876-2"
    />,
    <path
      className="paginate-filter-android_svg__a"
      d="M23.5 1.5a1 1 0 00-1-1h-18a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1z"
    />,
    <path
      className="paginate-filter-android_svg__a"
      d="M19.5 10.5a6 6 0 00-12 0zM11.5 7.247"
    />,
    <path
      className="paginate-filter-android_svg__a"
      d="M11.5 7.247a.25.25 0 10.25.25.25.25 0 00-.25-.25M15.5 7.247a.25.25 0 10.25.25.25.25 0 00-.25-.25M3.5 4.5h-2a1 1 0 00-1 1v17a1 1 0 001 1h17a1 1 0 001-1v-2"
    />
  );

export default SvgPaginateFilterAndroid;
