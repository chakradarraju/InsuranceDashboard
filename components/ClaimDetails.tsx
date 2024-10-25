'use client';

import ProfilePic from '@/components/ProfilePic';
import { UIClaim } from '@/schema/Claim';
import ClaimDetailsStageProgress from './ClaimDetailsStageProgress';
import { Badge, Grid, GridItem, Tabs } from "@chakra-ui/react";

const tabs = ["Claim", "Policy", "Customer", "Appraisals", "Litigation", "Fraud", "Leakages", "Network"];

function displayComments(comments): string {
  var ret = "";
  for (var i = 0; i < comments.length; i++) {
    ret += comments[0].comment + "\n";
  }
  return ret;
}

const ClaimDetails: React.FC<{claim: UIClaim}> = ({claim}) => {
  return (<div className='flex flex-col p-4'>
    <div className='flex'>
      <div className='p-4'>
        <ProfilePic src="/customer.png" />
      </div>
      <div className='flex flex-col p-4'>
        <div className='text-sm'>Customer Info</div>
        <div className='font-bold mb-2'>{claim.policyHolderName}</div>
        <div>{claim.policyHolderId}</div>
      </div>
      <ClaimDetailsStageProgress stageProgress={claim.stageProgress} className="flex flex-1 p-5" />
      <div className='flex flex-col w-1/5'>
        Add note
        <textarea className='mt-2 p-1 flex-1'/>
      </div>
    </div>
    <div className='flex'>
      <Tabs.Root variant="line" defaultValue="Claim" className='flex-1'>
        <Tabs.List>
          {tabs.map((tab, idx) => <Tabs.Trigger key={idx} value={tab} className='p-3'>{tab}</Tabs.Trigger>)}
        </Tabs.List>
        <Tabs.Content value="Claim">
          <Grid templateColumns="repeat(5, 1fr)" gap="6" className='flex flex-grow p-3'>
            <GridItem className='flex-col'>
              <div className='text-sm text-gray-500'>Claim no.</div>
              <div>{claim.claimNo}</div>
            </GridItem>
            <GridItem className='flex-col'>
              <div className='text-sm text-gray-500'>Claim amount</div>
              <div>{claim.valueCurrencySymbol} {claim.value}</div>
            </GridItem>
            <GridItem className='flex-col'>
              <div className='text-sm text-gray-500'>Claim type</div>
              <div>{claim.type}</div>
            </GridItem>
            <GridItem className='flex-col'>
              <div className='text-sm text-gray-500'>Claim handler</div>
              <div>{claim.handlerName}</div>
            </GridItem>
            <GridItem className='flex-col'>
              <div className='text-sm text-gray-500'>Claim date</div>
              <div>{new Date(claim.reportTime).toDateString()}</div>
            </GridItem>
            <GridItem colSpan={2} className='flex-col'>
              <div className='text-sm text-gray-500'>Description</div>
              <div>{claim.description}</div>
            </GridItem>
            <GridItem colSpan={2} className='flex-col'>
              <div className='text-sm text-gray-500'>Comments</div>
              <div>{displayComments(claim.comments)}</div>
            </GridItem>
            <GridItem>
              <div className='text-sm text-gray-500'>Tags</div>
              <div>{claim.tags?.map(t => <Badge variant="solid" className='m-1'>{t}</Badge>)}</div>
            </GridItem>
            <GridItem>
              <div className='text-sm text-gray-500'>Address</div>
              <div>{claim.locations?.reduce((c, a) => c + a.address + ' ', '')}</div>
            </GridItem>
            <GridItem>
              <div className='text-sm text-gray-500'>Reports</div>
              {claim.reports?.map(r => <div>{r.approved ? '✓' : 'X'} {r.name}</div>)}
            </GridItem>
            <GridItem colSpan={2}>
              <div className='text-sm text-gray-500'>Previous claims</div>
              Coming soon
            </GridItem>
          </Grid>
        </Tabs.Content>
        {tabs.slice(1).map((tab, idx) => <Tabs.Content key={idx} value={tab}>{tab} coming soon...</Tabs.Content>)}
      </Tabs.Root>
    </div>
  </div>)
}

export default ClaimDetails;