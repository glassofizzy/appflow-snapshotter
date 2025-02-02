import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { OriginalDocument } from "@/components/compare/OriginalDocument";
import { SuggestedChanges } from "@/components/compare/SuggestedChanges";

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

const Compare = () => {
  const { toast } = useToast();
  const [differences, setDifferences] = useState<Difference[]>([
    {
      id: '1',
      type: 'text',
      oldContent: 'User will see Side by side view of the old and new comparison',
      newContent: 'User will see an image with an interactive slider in the middle that would show the older image on the left side and new image of the right side',
      accepted: false,
      evidence: {
        screenshot: '/lovable-uploads/089d8b09-41de-4fd8-bc0a-0e22eae51160.png',
        recording: '/lovable-uploads/11d1b54d-c55f-4925-a60d-2882a54dc43e.png'
      }
    },
    {
      id: '2',
      type: 'image',
      oldContent: '/lovable-uploads/7d96ec91-4dc0-4a13-89a8-e9e73156ee33.png',
      newContent: '/lovable-uploads/7de04892-1e51-4d4e-84ca-dc789da14371.png',
      accepted: false
    }
  ]);

  const handleAcceptChange = (id: string) => {
    setDifferences(prev => 
      prev.map(diff => {
        if (diff.id === id) {
          return { 
            ...diff, 
            accepted: true,
            oldContent: diff.newContent 
          };
        }
        return diff;
      })
    );
    toast({
      title: "Change Accepted",
      description: "The selected change has been approved and applied to the original document.",
    });
  };

  const handleAcceptAll = () => {
    setDifferences(prev => prev.map(diff => ({
      ...diff,
      accepted: true,
      oldContent: diff.newContent
    })));
    toast({
      title: "All Changes Accepted",
      description: "All changes have been approved and applied to the original document.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-2 min-h-screen">
        <OriginalDocument differences={differences} />
        <SuggestedChanges 
          differences={differences}
          onAcceptChange={handleAcceptChange}
          onAcceptAll={handleAcceptAll}
        />
      </div>
    </div>
  );
};

export default Compare;