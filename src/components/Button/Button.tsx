import React from "react";

import { IButton } from "../../Interfaces";
import { styles } from "./button.styles";

export const Button = React.memo(
  ({
    id,
    isActive,
    text,
    testId = "ButtonComponent",
    handleChangeActiveTab,
  }: IButton) => {
    return (
      <div
        id={id}
        data-testid={testId}
        className={styles.getButtonContainer(isActive)}
        onClick={handleChangeActiveTab}
      >
        {text}
      </div>
    );
  }
);
