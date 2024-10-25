'use client';

import { useRouter } from 'next/navigation';
import { UIClaim } from '@/schema/Claim';

const MS_IN_DAY = 24 * 60 * 60 * 1000;

function ageOfClaim(claim: UIClaim): number {
  const diff = new Date().getTime() - new Date(claim.reportTime).getTime();
  return Math.floor(diff / MS_IN_DAY);
}

const ClaimsTable: React.FC<{claims: UIClaim[]}> = ({claims}) => {
  const router = useRouter();

  return (<div className='p-5'>
    <table className="w-full border dark:border-gray-400">
      <thead>
        <tr>
          <th className='p-1'>Claim type</th>
          <th className='p-1'>Assignee</th>
          <th className='p-1'>Claim value</th>
          <th className='p-1'>Age of claim (days)</th>
          <th className='p-1'>Description</th>
          <th className='p-1'>Number of comments</th>
        </tr>
      </thead>      
      <tbody>
        {claims.map((claim) => (
          <tr key={claim._id} className='hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer' onClick={() => router.push(`/claims/${claim._id}`)}>
            <td className='p-2'>{claim.type}</td>
            <td className='p-2'>{claim.handlerName}</td>
            <td className='p-2'>{claim.valueCurrencySymbol} {claim.value}</td>
            <td className='p-2'>{ageOfClaim(claim)}</td>
            <td className='p-2'>{claim.description}</td>
            <td className='p-2'>{claim.comments?.length || 0}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>)
}

export default ClaimsTable;