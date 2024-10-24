'use client';

import { useRouter } from 'next/navigation';

const claims = [
  { id: 1, title: "Claim 1", description: "Description for claim 1", age: 23, assignee: 'John' },
  { id: 2, title: "Claim 2", description: "Description for claim 2", age: 5, assignee: 'Michael' },
  { id: 3, title: "Claim 3", description: "Description for claim 3", age: 89, assignee: 'Don' },
  // Add more claims as needed
];

const Page: React.FC = () => {
  const router = useRouter();

  return (<div className='p-5'>
    <table className="w-full border">
      <thead>
        <tr>
          <th className='p-1'>Claim</th>
          <th className='p-1'>Assignee</th>
          <th className='p-1'>Age of claim</th>
          <th className='p-1'>Comments</th>
        </tr>
      </thead>      
      <tbody>
        {claims.map((claim) => (
          <tr key={claim.id} className='hover:bg-gray-50 cursor-pointer' onClick={() => router.push(`/claims/${claim.id}`)}>
            <td className='p-2'>{claim.title}</td>
            <td className='p-2'>{claim.assignee}</td>
            <td className='p-2'>{claim.description}</td>
            <td className='p-2'>{claim.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>)
};

export default Page;