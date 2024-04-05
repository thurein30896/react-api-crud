import React from 'react'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'


const Record = ({course : {id,title,short_name,fee}}) => {

  return (
    <tr className="record-row odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white record-id"
        >
          {id}
        </th>
        <td
          data-column="title"
          className="px-6 py-4 editable-cell record-title"
        >
          {title}
        </td>
        <td
          data-column="short_name"
          className="px-6 py-4 editable-cell record-short"
        >
          {short_name}
        </td>
        <td
          data-column="fee"
          className="px-6 py-4 editable-cell record-fee text-end"
        >
          {fee}
        </td>
        <td className="px-6 py-4 text-end whitespace-nowrap">
          <EditButton id={id} />
          <DeleteButton id={id} />
        </td>
      </tr>
  )
}

export default Record