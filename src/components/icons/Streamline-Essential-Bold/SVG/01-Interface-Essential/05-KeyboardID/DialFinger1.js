import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDialFinger1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={1.75} cy={1.751} r={1.75} />,
    <circle cx={6.75} cy={1.751} r={1.75} />,
    <circle cx={11.75} cy={1.751} r={1.75} />,
    <circle cx={1.75} cy={6.751} r={1.75} />,
    <circle cx={6.75} cy={6.751} r={1.75} />,
    <circle cx={11.75} cy={6.751} r={1.75} />,
    <circle cx={1.75} cy={11.751} r={1.75} />,
    <circle cx={6.75} cy={11.751} r={1.75} />,
    <path d="M19.5 17H17v-6a2 2 0 00-4 0v8.443l-1.462-1.759a2 2 0 00-3.076 2.556l2.975 3.579a.5.5 0 00.385.181H23.5a.5.5 0 00.5-.5v-2a4.5 4.5 0 00-4.5-4.5z" />
  );

export default SvgDialFinger1;
