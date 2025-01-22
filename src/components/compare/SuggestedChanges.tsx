import { Check } from "lucide-react";
import { EvidenceButtons } from "./EvidenceButtons";

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
            
            <div className="flex items-center gap-4">
              {!diff.accepted && (
                <button 
                  onClick={() => onAcceptChange(diff.id)}
                  className="retro-button"
                >
                  Accept this change
                </button>
              )}
              
              {diff.evidence && <EvidenceButtons evidence={diff.evidence} />}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <button 
          onClick={onAcceptAll}
          className="retro-button"
        >
          Accept all changes
        </button>
      </div>
    </div>
  );
};