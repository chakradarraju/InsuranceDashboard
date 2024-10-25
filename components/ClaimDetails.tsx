'use client';

import ProfilePic from '@/components/ProfilePic';
import { UIClaim } from '@/schema/Claim';
import ClaimDetailsStageProgress from './ClaimDetailsStageProgress';
import { Tabs } from "@chakra-ui/react";

const tabs = ["Claim", "Policy", "Customer", "Appraisals", "Litigation", "Fraud", "Leakages", "Network"];

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
      <Tabs.Root variant="line" defaultValue="Claim">
        <Tabs.List>
          {tabs.map((tab, idx) => <Tabs.Trigger key={idx} value={tab} className='p-3'>{tab}</Tabs.Trigger>)}
        </Tabs.List>
        <Tabs.Content value="Claim">
          Main content goes here
        </Tabs.Content>
        {tabs.slice(1).map((tab, idx) => <Tabs.Content key={idx} value={tab}>{tab} coming soon...</Tabs.Content>)}
      </Tabs.Root>
    </div>
  </div>)
}

export default ClaimDetails;