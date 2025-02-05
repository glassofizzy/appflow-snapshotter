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
        <div className="retro-card">
          <div className="flex justify-center items-center mb-4">
            <img 
              src="/lovable-uploads/acd989a5-8888-4919-8e43-2076ce8f4dcb.png"
              alt="Updated Profile"
              className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-end gap-2">
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

        {differences.map((diff) => (
          <div key={`suggested-${diff.id}`} className="retro-card space-y-4">
            <div className="flex justify-between items-start">
              {diff.type === 'text' ? (
                <p className="text-gray-700">
                  {diff.id === '1' 
                    ? "Design styling decision: The profile module is entirely in dark mode. Moving the design to a clean, minimalist look"
                    : diff.newContent
                  }
                </p>
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
        <button className="bg-cohere-off-white text-cohere-dark-gray border-2 border-cohere-dark-gray rounded-lg py-2 px-6 font-bold hover:bg-cohere-light-gray transition-colors duration-200">
          Compare again
        </button>

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
      </div>
    </div>
  );
};