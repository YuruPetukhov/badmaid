import { styles } from "./tableSkeleton.styles";

export const TableSkeleton = () => (
  <>
    <tbody
      data-testid="TableSkeleton"
      className={styles.skeletonContainerClasses}
    >
      <tr>
        <td className={styles.skeletonTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
      </tr>
      <tr>
        <td className={styles.emptyTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
      </tr>
    </tbody>
    <tbody className={styles.skeletonContainerClasses}>
      <tr>
        <td className={styles.skeletonTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
      </tr>
      <tr>
        <td className={styles.emptyTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
        <td className={styles.skeletonTdClasses}></td>
      </tr>
    </tbody>
  </>
);
