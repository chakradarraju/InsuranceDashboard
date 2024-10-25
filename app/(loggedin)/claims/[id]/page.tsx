
import { fetchClaim } from '@/services/claims';
import ClaimDetails from '@/components/ClaimDetails';
import { makeUIClaimFromDBClaim } from '@/lib/docUITransformers';

const Page: React.FC<{ params: Promise<{id: string}> }> = async ({params}) => {
  const paramsVal = await params;
  const id = paramsVal.id;
  if (!id || typeof id !== 'string') {
    return `Missing id: ${id}`;
  }
  const claim = await fetchClaim(id);
  if (!claim) {
    return `Claim with ${id} not found`;
  }
  const serialised = makeUIClaimFromDBClaim(claim);
  return <ClaimDetails claim={serialised} />;
}

export default Page;