import React from 'react'

const SkeletonRecord = () => {
  return (
    <tr
        id="skeletonLoader"
        className="animate-pulse odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
      >
        <td className="px-6 py-6">
          <div className="h-3 bg-slate-400 rounded-full" />
        </td>
        <td className="px-6 py-6">
          <div className="h-3 bg-slate-400 rounded-full" />
        </td>
        <td className="px-6 py-6">
          <div className="h-3 bg-slate-400 rounded-full" />
        </td>
        <td className="px-6 py-6">
          <div className="h-3 bg-slate-400 rounded-full" />
        </td>
        <td className="px-6 py-6">
          <div className="flex gap-2 justify-end">
            <div className="h-3 w-8 bg-slate-400 rounded-full" />
            <div className="h-3 w-8 bg-slate-400 rounded-full" />
          </div>
        </td>
      </tr>
  )
}

export default SkeletonRecord