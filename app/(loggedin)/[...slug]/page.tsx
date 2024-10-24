'use client';

import { useParams, useSearchParams } from 'next/navigation';

const Page: React.FC = () => {
  const params = useParams();

  return (<>
  {params?.slug && `${params?.slug} not implemented`}
  {!params?.slug && `Not found`}
  </>)
}

export default Page;