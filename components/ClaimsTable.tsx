'use client';

import { useRouter } from 'next/navigation';
import { UIClaim } from '@/schema/Claim';
import { Table } from '@chakra-ui/react';

const MS_IN_DAY = 24 * 60 * 60 * 1000;

function ageOfClaim(claim: UIClaim): number {
  const diff = new Date().getTime() - new Date(claim.reportTime).getTime();
  return Math.floor(diff / MS_IN_DAY);
}

const ClaimsTable: React.FC<{claims: UIClaim[]}> = ({claims}) => {
  const router = useRouter();

  return (<div className='p-5'>
    <Table.Root variant="line" striped className='w-full' interactive>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Claim type</Table.ColumnHeader>
          <Table.ColumnHeader>Assignee</Table.ColumnHeader>
          <Table.ColumnHeader>Claim value</Table.ColumnHeader>
          <Table.ColumnHeader>Age of claim (days)</Table.ColumnHeader>
          <Table.ColumnHeader>Description</Table.ColumnHeader>
          <Table.ColumnHeader>Number of comments</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {claims.map((claim) => (
          <Table.Row key={claim._id} className='cursor-pointer' onClick={() => router.push(`/claims/${claim._id}`)}>
            <Table.Cell className='p-2'>{claim.type}</Table.Cell>
            <Table.Cell className='p-2'>{claim.handlerName}</Table.Cell>
            <Table.Cell className='p-2'>{claim.valueCurrencySymbol} {claim.value}</Table.Cell>
            <Table.Cell className='p-2'>{ageOfClaim(claim)}</Table.Cell>
            <Table.Cell className='p-2'>{claim.description}</Table.Cell>
            <Table.Cell className='p-2'>{claim.comments?.length || 0}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  </div>)
}

export default ClaimsTable;