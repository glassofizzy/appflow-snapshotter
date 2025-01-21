import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Authentication = () => {
  return (
    <div className="retro-card space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="Enter your username"
            className="retro-input"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="retro-input"
          />
        </div>
      </div>
    </div>
  );
};

export default Authentication;