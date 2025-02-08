
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface StepTwoProps {
  selectedFlow: string;
  setSelectedFlow: (value: string) => void;
  customFlow: string;
  setCustomFlow: (value: string) => void;
  uploadedFile: File | null;
  onNext: () => void;
  onPrevious: () => void;
}

const StepTwo = ({
  selectedFlow,
  setSelectedFlow,
  customFlow,
  setCustomFlow,
  uploadedFile,
  onNext,
  onPrevious,
}: StepTwoProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left Column - Document Preview */}
      <div className="bg-white p-8 rounded-lg border-2 border-cohere-light-gray">
        <h3 className="text-xl font-bold text-cohere-dark-green mb-4">Document Preview</h3>
        <div className="aspect-video bg-cohere-light-gray rounded-lg flex items-center justify-center">
          <img
            src="/lovable-uploads/387d110e-49d7-436e-b03e-6e30fec6e441.png"
            alt="Viki Help Center - Sign Up documentation"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* Right Column - Flow Selection */}
      <div className="bg-white p-8 rounded-lg border-2 border-cohere-light-gray space-y-6">
        <h3 className="text-xl font-bold text-cohere-dark-green">Which user flow or product feature are you trying to compare?</h3>
        
        <RadioGroup value={selectedFlow} onValueChange={setSelectedFlow}>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="profile" id="profile" />
              <Label htmlFor="profile">View/edit profile page</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="history" id="history" />
              <Label htmlFor="history">View/edit watch history</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="collections" id="collections" />
              <Label htmlFor="collections">View/edit my collections</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="custom" id="custom" />
              <Label htmlFor="custom">Not these? Tell us in your words</Label>
            </div>
          </div>
        </RadioGroup>

        {selectedFlow === 'custom' && (
          <Input
            placeholder="Describe the flow you want to compare"
            value={customFlow}
            onChange={(e) => setCustomFlow(e.target.value)}
            className="mt-4 bg-white border-2 border-cohere-light-gray"
          />
        )}

        <div className="flex justify-between pt-4">
          <Button 
            variant="outline" 
            onClick={onPrevious}
            className="border-2 border-cohere-light-gray hover:bg-cohere-light-beige"
          >
            Previous
          </Button>
          <Button 
            onClick={onNext}
            className="bg-cohere-dark-green text-white hover:bg-opacity-90"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
