import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22 0H5.5a2 2 0 00-2 2v16.5a2 2 0 002 2H22a2 2 0 002-2V2a2 2 0 00-2-2zm-7.5 15a.5.5 0 01-.5.5H9a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h5a.5.5 0 01.5.5zm5-4.5a.5.5 0 01-.5.5H9a.5.5 0 01-.5-.5v-1A.5.5 0 019 9h10a.5.5 0 01.5.5zm0-4.5a.5.5 0 01-.5.5H9a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5z" />,
    <path d="M19.5 22h-17a.5.5 0 01-.5-.5v-17a1 1 0 00-2 0V22a2 2 0 002 2h17.5a1 1 0 000-2z" />
  );

export default SvgPaginateFilterText;
