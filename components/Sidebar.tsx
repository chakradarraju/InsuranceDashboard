'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

interface LinkSchema {
  name: string,
  link: string
}

interface LinkGroupSchema {
  groupName: string,
  items: LinkSchema[]
}

const items: LinkGroupSchema[] = [
  {
    groupName: '',
    items: [
      { name: 'Claims', link: '/claims' },
      { name: 'Customers', link: '/customers' },
      { name: 'Policies', link: '/policies' },
      { name: 'Providers', link: '/providers' },
      { name: 'Appraisals', link: '/appraisals' },
    ]
  }, {
    groupName: 'Tools',
    items: [
      { name: 'Dashboard', link: '/dashboard' },
      { name: 'Fraud Analysis', link: '/fraud-analysis' },
      { name: 'Leakages', link: '/leakages' },
      { name: 'Market Evaluation', link: '/market-evaluation' },
      { name: 'Graph Analysis', link: '/graph-analysis' },
      { name: 'Document Verification', link: '/document-verification' },
    ]
  }, {
    groupName: 'Workflows',
    items: [
      { name: 'FNOL', link: '/fnol/' },
      { name: 'Underwriting', link: '/underwriting/' },
    ]
  }
]

const SidebarItem: React.FC<{link: LinkSchema, activePath: string | null}> = ({link, activePath}) => (
    <Link href={link.link} className={clsx(`hover:bg-blue-200 transition cursor-pointer rounded-lg p-3 m-1 mr-6 block`, {
    'bg-blue-400 text-white': activePath?.startsWith(link.link)
  })}>{link.name}</Link>
)

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (<div className="w-1/6 w-min-4 p-1 ">
    <div className="mb-1 sidebarSection">
      {items.map((group, idx) => {
        return (<div key={idx} className='p-1'>
          {group.groupName && <div className='border-gray-400 font-bold'>{group.groupName}</div>}
          {group.items.map((item, idx) => <SidebarItem key={idx} link={item} activePath={pathname} />)}
        </div>);
      })}
    </div>
  </div>);
}
  

export default Sidebar;