import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Check } from "lucide-react";

const AppIdentification = () => {
  const [appInput, setAppInput] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appInput.trim()) {
      toast.error("Please enter an App Store link or ID");
      return;
    }
    setIsConfirmed(true);
    toast.success("App identified successfully!");
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Enter App Store link or ID"
            value={appInput}
            onChange={(e) => setAppInput(e.target.value)}
            className={`retro-input w-full ${isConfirmed ? 'pr-10' : ''}`}
          />
          {isConfirmed && (
            <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
          )}
        </div>
        <Button type="submit" className="retro-button w-full hover:bg-accent">
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default AppIdentification;