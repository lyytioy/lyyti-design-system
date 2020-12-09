import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 24C.673 24 0 23.327 0 22.5v-17C0 4.673.673 4 1.5 4H3V1.5C3 .673 3.673 0 4.5 0h18c.827 0 1.5.673 1.5 1.5v18c0 .827-.673 1.5-1.5 1.5H20v1.5c0 .827-.673 1.5-1.5 1.5h-17zm0-19a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h17a.5.5 0 00.5-.5V21H4.5c-.827 0-1.5-.673-1.5-1.5V5H1.5zm3-4a.5.5 0 00-.5.5v18a.5.5 0 00.5.5h18a.5.5 0 00.5-.5v-18a.5.5 0 00-.5-.5h-18z" />,
    <path d="M7.496 4.997a.5.5 0 010-1h12a.5.5 0 010 1h-12zM7.496 8.997a.5.5 0 010-1h12a.5.5 0 010 1h-12zM7.496 12.997a.5.5 0 010-1h12a.5.5 0 010 1h-12zM7.496 16.997a.5.5 0 010-1H13a.5.5 0 010 1H7.496z" />
  );

export default SvgPaginateFilterText;
