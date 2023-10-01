import classNames from "classnames";

export const styles = {
  getButtonContainer: (isActive: boolean) =>
    classNames(
      "border-2 border-cyan-500 p-1",
      isActive ? "text-white bg-cyan-500" : "text-cyan-500"
    ),
};
