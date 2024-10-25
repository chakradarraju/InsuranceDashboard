import { DBClaim, UIClaim } from '@/schema/Claim';
import { WithId } from 'mongodb';

export function makeUIClaimFromDBClaim(claim: WithId<DBClaim>): UIClaim {
  return { ...claim, ...{
    _id: claim._id.toString(),
    claimTime: claim.claimTime?.toISOString(),
    reportTime: claim.reportTime.toISOString(),
    reports: claim.reports?.map(r => ({ ...r, ...{ time: r.time.toISOString() } })),
    comments: claim.comments?.map(c => ({ ...c, ...{ time: c.time?.toISOString() } })),
    closeTime: claim.closeTime?.toISOString(),
  } };
}

export function makeUIClaimsFromDBClaims(claims: DBClaim[]): UIClaim[] {
  return claims.map(makeUIClaimFromDBClaim);
}