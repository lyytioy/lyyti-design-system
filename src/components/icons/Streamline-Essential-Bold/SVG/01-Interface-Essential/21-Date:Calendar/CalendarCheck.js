import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M21.5 3h-2.75a.25.25 0 01-.25-.25V1a1 1 0 00-2 0v4.75a.75.75 0 11-1.5 0V3.5a.5.5 0 00-.5-.5H8.25A.25.25 0 018 2.751V1a1 1 0 10-2 0v4.75a.75.75 0 11-1.5 0V3.5A.5.5 0 004 3H2.5a2 2 0 00-2 2v17a2 2 0 002 2h19a2 2 0 002-2V5a2 2 0 00-2-2zm0 18.5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5v-12A.5.5 0 013 9h18a.5.5 0 01.5.5z" />,
    <path d="M12 10.5a5 5 0 105 5 5 5 0 00-5-5zm2.829 4l-2.421 3.229a1.376 1.376 0 01-2.075.145L9.084 16.62a.75.75 0 111.061-1.06l1.149 1.15 2.334-3.11a.75.75 0 011.2.9z" />
  );

export default SvgCalendarCheck;
