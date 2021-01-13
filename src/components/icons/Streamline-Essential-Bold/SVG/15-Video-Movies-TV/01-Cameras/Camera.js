import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M7.543 22.293a1 1 0 101.414 1.414l2.78-2.78a.25.25 0 00-.176-.427H9.439a.248.248 0 00-.176.073zM15.543 23.707a1 1 0 001.414-1.414l-1.72-1.72a.248.248 0 00-.176-.073h-2.122a.25.25 0 00-.176.427zM20.75 13.693a1 1 0 00-1.316-.948l-1.355.452a.25.25 0 01-.329-.237V12a1 1 0 00-1-1h-9a1 1 0 00-1 1v6a1 1 0 001 1h9a1 1 0 001-1v-.96a.25.25 0 01.329-.237l1.354.452a1 1 0 001.317-.948z" />,
    <circle cx={8.25} cy={5} r={5} />,
    <circle cx={17.75} cy={7} r={3} />
  );

export default SvgCamera;