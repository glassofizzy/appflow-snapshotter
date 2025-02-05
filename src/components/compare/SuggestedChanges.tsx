import { Check, MessageCircle, FilePlus, ChevronDown } from "lucide-react";
import { EvidenceButtons } from "./EvidenceButtons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Difference {
  id: string;
  type: 'text' | 'image';
  oldContent: string;
  newContent: string;
  accepted: boolean;
  evidence?: {
    screenshot?: string;
    recording?: string;
  };
}

interface SuggestedChangesProps {
  differences: Difference[];
  onAcceptChange: (id: string) => void;
  onAcceptAll: () => void;
}

export const SuggestedChanges = ({ 
  differences, 
  onAcceptChange, 
  onAcceptAll 
}: SuggestedChangesProps) => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Suggested Changes</h2>
      <div className="space-y-6">
        {differences.map((diff) => (
          <div key={`suggested-${diff.id}`} className="retro-card space-y-4">
            <div className="flex justify-between items-start">
              {diff.type === 'text' ? (
                <p className="text-gray-700">{diff.newContent}</p>
              ) : (
                <img 
                  src={diff.newContent} 
                  alt="Updated version" 
                  className="w-full h-auto object-contain rounded-lg"
                />
              )}
              {diff.accepted && (
                <span className="ml-2 flex-shrink-0">
                  <Check className="h-6 w-6 text-green-500" />
                </span>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {!diff.accepted && (
                  <button 
                    onClick={() => onAcceptChange(diff.id)}
                    className="retro-button"
                  >
                    Accept
                  </button>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="retro-button">
                        <MessageCircle className="w-5 h-5" />
                        <span className="sr-only">Comment on original doc</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Comment on original doc</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="retro-button">
                        <FilePlus className="w-5 h-5" />
                        <span className="sr-only">Add to new doc</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add to new doc</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 pt-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="retro-button inline-flex items-center gap-2">
              Accept all changes
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={onAcceptAll}>
              Draft new doc
            </DropdownMenuItem>
            <DropdownMenuItem>
              Comment on original doc
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <button className="retro-button">
          Compare again
        </button>
      </div>
    </div>
  );
};