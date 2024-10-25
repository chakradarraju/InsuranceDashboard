import { fetchClaims } from '@/services/claims';
import ClaimsTable from '@/components/ClaimsTable';
import { makeUIClaimsFromDBClaims } from '@/lib/docUITransformers';

const Page: React.FC = async () => {
  const claims = await fetchClaims();
  const serialised = makeUIClaimsFromDBClaims(claims);
  return <ClaimsTable claims={serialised} />;
}

export default Page;