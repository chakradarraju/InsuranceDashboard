import { ClaimStage } from "@/schema/Claim";
import Image from "next/image";

const ClaimDetailsStageProgress: React.FC<{ stageProgress?: ClaimStage[], className?: string }> = ({stageProgress, className}) => {
  return (<div className={className}>
    {stageProgress && stageProgress.map((stage, idx) => (<div key={idx} className="flex flex-col flex-grow items-center justify-center">
      <Image alt={stage.done ? 'done' : 'pending'} width={30} height={33} className="w-8 h-8" src={`/claim-stage-${stage.done ? 'done' : 'pending'}.png`} />
      {stage.label}
    </div>))}
  </div>);
}

export default ClaimDetailsStageProgress;