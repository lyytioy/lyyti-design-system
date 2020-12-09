import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsToggleHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22.5 0h-21A1.5 1.5 0 000 1.5v21A1.5 1.5 0 001.5 24h21a1.5 1.5 0 001.5-1.5v-21A1.5 1.5 0 0022.5 0zm-6 10.5h-9a3.5 3.5 0 110-7h9a3.5 3.5 0 110 7zm3.529 6.5a3.515 3.515 0 01-3.529 3.5h-9a3.5 3.5 0 110-7h9a3.515 3.515 0 013.529 3.5z" />,
    <circle cx={7.5} cy={6.972} r={2} />,
    <circle cx={16.5} cy={17.03} r={2} />
  );

export default SvgSettingsToggleHorizontal;
