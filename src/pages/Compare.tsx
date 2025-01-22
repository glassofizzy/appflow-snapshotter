import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";

interface Difference {
  id: string;
  type: 'text' | 'image';
  oldContent: string;
  newContent: string;
  accepted: boolean;
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
      accepted: false
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
      prev.map(diff => 
        diff.id === id ? { ...diff, accepted: true } : diff
      )
    );
    toast({
      title: "Change Accepted",
      description: "The selected change has been approved.",
    });
  };

  const handleAcceptAll = () => {
    setDifferences(prev => prev.map(diff => ({ ...diff, accepted: true })));
    toast({
      title: "All Changes Accepted",
      description: "All changes have been approved.",
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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Document Comparison</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Review and approve changes between your documentation and real-time captures
          </p>
        </div>

        <div className="space-y-8">
          {differences.map((diff) => (
            <div key={diff.id} className="bg-white rounded-lg border-2 border-black p-6 space-y-4">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">Original Version</h3>
                  {diff.type === 'text' ? (
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-gray-700">{diff.oldContent}</p>
                    </div>
                  ) : (
                    <img 
                      src={diff.oldContent} 
                      alt="Original version" 
                      className="w-full h-auto object-contain rounded-lg border border-gray-200"
                    />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">Updated Version</h3>
                  {diff.type === 'text' ? (
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-gray-700">{diff.newContent}</p>
                    </div>
                  ) : (
                    <img 
                      src={diff.newContent} 
                      alt="Updated version" 
                      className="w-full h-auto object-contain rounded-lg border border-gray-200"
                    />
                  )}
                </div>
              </div>
              {!diff.accepted && (
                <Button 
                  onClick={() => handleAcceptChange(diff.id)}
                  className="retro-button"
                >
                  Accept this change
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            onClick={handleAcceptAll}
            className="retro-button"
          >
            Accept all changes
          </Button>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-center">Ask Questions</h2>
          <div className="space-y-4">
            <Textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question about the changes..."
              className="retro-input min-h-[100px]"
            />
            <Button 
              onClick={handleQuestionSubmit}
              className="retro-button w-full flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Submit Question
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;