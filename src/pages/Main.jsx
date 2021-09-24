import { useCallback, useState } from "react";
import React from "react";
import { TableContainer } from "../components/table/tableContainer";
import { PlotData } from "../components/plot/plotData";

export const Main = () => {
  const [isOpened, setIsOpened] = useState(true);

  //   const clickHandle = () => setIsOpened((status) => !status);
  const clickHandle = useCallback(
    () => setIsOpened((status) => !status),
    [setIsOpened]
  );
  return (
    <>
      <TableContainer />
      <PlotData />
    </>
  );
};
