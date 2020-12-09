import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M15 14h-.25v-.5a2.75 2.75 0 10-5.5 0v.5H9a1 1 0 00-1 1v4.5a1 1 0 001 1h6a1 1 0 001-1V15a1 1 0 00-1-1zm-3 4.25a.75.75 0 11.75-.75.75.75 0 01-.75.751zM13.25 14h-2.5v-.5a1.25 1.25 0 112.5 0z" />,
    <path d="M21.5 3h-2.75a.25.25 0 01-.25-.25V1a1 1 0 00-2 0v4.75a.75.75 0 11-1.5 0V3.5a.5.5 0 00-.5-.5H8.25A.25.25 0 018 2.751V1a1 1 0 10-2 0v4.75a.75.75 0 11-1.5 0V3.5A.5.5 0 004 3H2.5a2 2 0 00-2 2v17a2 2 0 002 2h19a2 2 0 002-2V5a2 2 0 00-2-2zm0 18.5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5v-12A.5.5 0 013 9h18a.5.5 0 01.5.5z" />
  );

export default SvgCalendarLock;
