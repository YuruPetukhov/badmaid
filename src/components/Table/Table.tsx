import { useCallback, useState } from "react";
import { Button } from "../Button";
import { Header } from "../Header";
import { TableSkeleton } from "./TableSceleton/TableSceleton";
import { IActiveState, ITable } from "../../Interfaces";
import { styles } from "./table.styles";

export const Table = ({
  testId = "TableComponent",
  cleanings,
  isLoading,
}: ITable) => {
  const [activeTab, setActiveTab] = useState<IActiveState>("upcoming");

  const handleChangeActiveTab = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target instanceof Element) {
        const { id } = e.target;
        setActiveTab(id as IActiveState);
      }
    },
    []
  );

  return (
    <div data-testid={testId} className={styles.tableContainerClasses}>
      <Header>All my cleanings</Header>
      <div className={styles.buttonContainerClasses}>
        <Button
          id="previous"
          isActive={activeTab === "previous"}
          text="Previous"
          handleChangeActiveTab={handleChangeActiveTab}
        />
        <Button
          id="upcoming"
          isActive={activeTab === "upcoming"}
          text="Upcoming"
          handleChangeActiveTab={handleChangeActiveTab}
        />
      </div>
      <table className={styles.tableClasses}>
        <thead>
          <tr className={styles.tableHeaderContainerClasses}>
            <th className={styles.thClasses}>Address</th>
            <th className={styles.thClasses}>Type</th>
            <th className={styles.thClasses}>Data & time</th>
            <th className={styles.thClasses}>Repetition</th>
            <th className={styles.thClasses}>Batmaid</th>
          </tr>
        </thead>
        {isLoading ? (
          <TableSkeleton />
        ) : (
          cleanings[activeTab].map((item, index) => {
            return (
              <tbody className={styles.tbodyClasses} key={index}>
                {item.jobs.map(
                  (
                    {
                      type,
                      date: { day, month, date, time },
                      periodicity,
                      agent,
                    },
                    index
                  ) => (
                    <tr key={index}>
                      <td className={styles.tdClasses}>
                        {index === 0 ? item.address : ""}
                      </td>
                      <td className={styles.tdClasses}>{type}</td>
                      <td className={styles.tdClasses}>
                        {day}, {month} {date}
                        <br />
                        {time}
                      </td>
                      <td className={styles.tdClasses}>{periodicity}</td>
                      <td className={styles.tdClasses}>{agent}</td>
                    </tr>
                  )
                )}
              </tbody>
            );
          })
        )}
      </table>
    </div>
  );
};
