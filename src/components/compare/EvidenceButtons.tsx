import { Camera, Video } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface Evidence {
  screenshot?: string;
  recording?: string;
}

interface EvidenceButtonsProps {
  evidence: Evidence;
}

export const EvidenceButtons = ({ evidence }: EvidenceButtonsProps) => {
  return (
    <div className="flex gap-2">
      {evidence.screenshot && (
        <Popover>
          <PopoverTrigger asChild>
            <button className="retro-button">
              <Camera className="h-4 w-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <img 
              src={evidence.screenshot} 
              alt="Screenshot evidence" 
              className="w-full h-auto rounded-lg"
            />
          </PopoverContent>
        </Popover>
      )}
      
      {evidence.recording && (
        <Popover>
          <PopoverTrigger asChild>
            <button className="retro-button">
              <Video className="h-4 w-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <img 
              src={evidence.recording} 
              alt="Recording evidence" 
              className="w-full h-auto rounded-lg"
            />
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};