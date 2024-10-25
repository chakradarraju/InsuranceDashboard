export type Claim = {
  customerId: string,
  claimNo: string,
  type: "AUTO/THIRD_PARTY" | "AUTO/SELF",
  policyHolderId: string,
  policyHolderName: string,
  status: "RAISED" | "APPROVED" | "REJECTED",
  value?: number,
  valueCurrencySymbol?: string,
  description?: string,
  tags?: string[],
  handlerId?: string,
  handlerName?: string,
  locations?: ClaimLocation[],
  stageProgress?: ClaimStage[],
}

export type DBClaim = Claim & {
  claimTime?: Date,
  reportTime: Date,
  reports?: DBClaimReport[],
  comments?: DBClaimComment[],
  closeTime: Date
}

export type UIClaim = Claim & {
  _id: string,
  claimTime?: string,
  reportTime: string,
  reports?: UIClaimReport[],
  comments?: UIClaimComment[],
  closeTime: string
}

export type ClaimStage = {
  label: string,
  done: boolean,
}

type ClaimComment = {
  handlerId: string,
  comment: string,
  subComment?: ClaimComment[]
}

type DBClaimComment = ClaimComment & {
  time: Date
}

type UIClaimComment = ClaimComment & {
  time: string
}

type ClaimLocation = {
  lat?: number,
  lon?: number,
  address?: string,
  tag?: string[]
}

type ClaimReport = {
  name: string,
  approved: boolean,
  content: string,
}

type DBClaimReport = ClaimReport & {
  time: Date
}

type UIClaimReport = ClaimReport & {
  time: string
};