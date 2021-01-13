import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserGauge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M6.122 16.9H4.163a.735.735 0 000 1.469h1.959a.735.735 0 100-1.469zM7.278 14.057l-1.7-.979a.735.735 0 10-.735 1.272l1.7.98a.735.735 0 00.735-1.273zM8.718 10.477a.735.735 0 00-1.273.735l.98 1.7a.735.735 0 001.275-.738zM12 12.488a.735.735 0 00.735-.735V9.8a.735.735 0 00-1.47 0v1.958a.735.735 0 00.735.73zM19.156 14.349a.735.735 0 00-.734-1.273l-1.7.978a.735.735 0 00.368 1.371.726.726 0 00.366-.1zM19.839 16.9H17.88a.735.735 0 000 1.469h1.959a.735.735 0 000-1.469zM15.5 11.2l-4.277 4.27a2.726 2.726 0 00-.692 1.673v.489a.774.774 0 00.96.788l.528-.105a2.024 2.024 0 001.324-1.1l2.357-5.886a.123.123 0 00-.2-.132z" />,
    <path d="M2.939 24h18.122A2.942 2.942 0 0024 21.061V2.939A2.942 2.942 0 0021.061 0H2.939A2.942 2.942 0 000 2.939v18.122A2.942 2.942 0 002.939 24zM11.02 2.939a.735.735 0 11-.734-.735.734.734 0 01.734.735zm-2.938 0a.735.735 0 11-.735-.739.735.735 0 01.735.739zm-2.939 0a.735.735 0 11-.735-.739.735.735 0 01.735.739zm15.918 19.1H2.939a.98.98 0 01-.98-.98V6.633a1 1 0 011-1h18.082a1 1 0 011 1v14.428a.98.98 0 01-.98.98z" />
  );

export default SvgBrowserGauge;