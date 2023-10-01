import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCleanings } from "../../store/reducers/ActionCreators";
import { Table as TableComponent } from "./Table";

export const Table = () => {
  const dispatch = useAppDispatch();
  const { cleanings, error, isLoading } = useAppSelector(
    (state) => state.cleaningsReducer
  );

  // this is not good resolution, but reduxtoolkit does not have logic to work with
  // react suspense

  useEffect(() => {
    dispatch(fetchCleanings());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    throw Error(error);
  }

  return <TableComponent cleanings={cleanings} isLoading={isLoading} />;
};
