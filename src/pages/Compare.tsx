import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Camera, Video, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
  const [question, setQuestion] = useState('');
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
      oldContent: '/lovable-uploads/089d8b09-41de-4fd8-bc0a-0e22eae51160.png',
      newContent: '/lovable-uploads/11d1b54d-c55f-4925-a60d-2882a54dc43e.png',
      accepted: false
    }
  ]);

  const handleAcceptChange = (id: string) => {
    setDifferences(prev => 
      prev.map(diff => {
        if (diff.id === id) {
          // Update the oldContent to match newContent when accepting a change
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

  const handleQuestionSubmit = () => {
    if (question.trim()) {
      toast({
        title: "Question Submitted",
        description: "Your question has been sent for analysis.",
      });
      setQuestion('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-2 min-h-screen">
        {/* Original Document Side */}
        <div className="border-r border-gray-200 p-8 space-y-8">
          <h2 className="text-3xl font-bold text-center">Original Document</h2>
          <div className="space-y-6">
            {differences.map((diff) => (
              <div key={`original-${diff.id}`} className="bg-white rounded-lg p-6 shadow-sm">
                {diff.type === 'text' ? (
                  <p className="text-gray-700">{diff.oldContent}</p>
                ) : (
                  <img 
                    src={diff.oldContent} 
                    alt="Original version" 
                    className="w-full h-auto object-contain rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Changes Side */}
        <div className="p-8 space-y-8">
          <h2 className="text-3xl font-bold text-center">Suggested Changes</h2>
          <div className="space-y-6">
            {differences.map((diff) => (
              <div key={`suggested-${diff.id}`} className="bg-white rounded-lg p-6 shadow-sm space-y-4">
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
                    <Button 
                      onClick={() => handleAcceptChange(diff.id)}
                      className="bg-accent hover:bg-accent-hover text-black"
                    >
                      Accept this change
                    </Button>
                  )}
                  
                  {diff.evidence && (
                    <div className="flex gap-2">
                      {diff.evidence.screenshot && (
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" size="icon">
                              <Camera className="h-4 w-4" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <img 
                              src={diff.evidence.screenshot} 
                              alt="Screenshot evidence" 
                              className="w-full h-auto rounded-lg"
                            />
                          </PopoverContent>
                        </Popover>
                      )}
                      
                      {diff.evidence.recording && (
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" size="icon">
                              <Video className="h-4 w-4" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <img 
                              src={diff.evidence.recording} 
                              alt="Recording evidence" 
                              className="w-full h-auto rounded-lg"
                            />
                          </PopoverContent>
                        </Popover>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <Button 
              onClick={handleAcceptAll}
              className="bg-accent hover:bg-accent-hover text-black"
            >
              Accept all changes
            </Button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-2xl mx-auto space-y-4">
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question about the changes..."
            className="min-h-[100px]"
          />
          <Button 
            onClick={handleQuestionSubmit}
            className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-black"
          >
            <MessageCircle className="w-5 h-5" />
            Submit Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Compare;