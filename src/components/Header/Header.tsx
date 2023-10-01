import { ReactElement } from "react";
import { IHeaderProps } from "../../Interfaces";

export const Header = ({
  testId = "HeaderComponent",
  children,
}: IHeaderProps): ReactElement => (
  <header data-testid={testId}>{children}</header>
);
