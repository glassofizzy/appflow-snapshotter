import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const AppIdentification = () => {
  const [appInput, setAppInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appInput.trim()) {
      toast.error("Please enter an App Store link or ID");
      return;
    }
    toast.success("App identified successfully!");
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Enter App Store link or ID"
          value={appInput}
          onChange={(e) => setAppInput(e.target.value)}
          className="retro-input w-full"
        />
        <Button type="submit" className="retro-button w-full">
          Identify App
        </Button>
      </form>
    </div>
  );
};

export default AppIdentification;