import { getDb } from '@/lib/mongo';
import { DBClaim } from '@/schema/Claim';
import { WithId, ObjectId } from 'mongodb';

export async function fetchClaims(): Promise<WithId<DBClaim>[]> {
  // return [];
  const db = await getDb();
  return db.collection<DBClaim>('claims').find({}).limit(10).toArray();  
}

export async function fetchClaim(id: string): Promise<WithId<DBClaim> | null> {
  const db = await getDb();

  return db.collection<DBClaim>('claims').findOne({_id: new ObjectId(id)});
}