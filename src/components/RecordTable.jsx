import React from "react";
import RecordGroup from "./RecordGroup";

const RecordTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Short Name
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Fee
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Action
            </th>
          </tr>
        </thead>
        <RecordGroup/>
      </table>
    </div>
  );
};

export default RecordTable;
