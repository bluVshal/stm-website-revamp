import React from 'react';
import OpenApplication from './OpenApplication';
import OpenRoles from './OpenRoles';

const Applications = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-8 py-10">
      <div className = "grid items-left gap-5 rounded-[2rem] border border-[#E6EBE7] bg-white/80 p-6 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur md:p-8 lg:w-full lg:grid-cols-[1.05fr_1.05fr] lg:p-10">
        <OpenRoles />
        <OpenApplication />
      </div>
    </div>
  )
}

export default Applications