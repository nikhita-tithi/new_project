import { FC } from "react";
import { rowData, rows, tableHeader, tableOps } from "../utils/constants";
import { StyledArrow } from "./StyledArrow";
import { StyledButton } from "./StyledButton";
import { StyledText } from "./StyledText";
import { MdOutlineErrorOutline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

interface StyledTableProps {}

export const StyledTable: FC<StyledTableProps> = ({}) => {
  return (
    //---The example table componenet---
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs uppercase bg-gray-50 text-gray-500">
          <tr>
            {tableHeader.map((colName:string) => (
              <th scope="col" className="px-6 py-3" key={colName}>
                <div className="flex items-center">
                  {colName}
                  <StyledArrow />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((i:number) => (
            <tr
              key={i}
              className="bg-white border-b border-gray-300"
            >
              {rowData.map((colData: string) => (
                <td className="px-6 py-2" key={colData}>
                  {colData}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between text-md font-normal text-gray-500 w-full px-3 py-2">
        <div className="flex space-x-2 font-semibold">
          <MdOutlineErrorOutline className="w-5 h-5 ms-1.5 text-gray-600"/>
          <StyledText
            text="Only X rows are shown. View full list for more."
            className=" text-gray-600"
          />
        </div>
        <IoCloseSharp color="gray" />
      </div>
      <div className="flex space-x-4 w-full px-4 py-3 bg-white">
        {tableOps.map((ops:string) => (
          <StyledButton className="border p-2 rounded text-sm bg-white ">
            {ops}
          </StyledButton>
        ))}
      </div>
    </div>
  );
};
