import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContextualInfo = () => {
  return (
    <div className="w-full max-w-xl mx-auto space-y-4">
      <Select>
        <SelectTrigger className="retro-select">
          <SelectValue placeholder="Select Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="retro-select">
          <SelectValue placeholder="Select Device" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="iphone-14">iPhone 14</SelectItem>
          <SelectItem value="iphone-13">iPhone 13</SelectItem>
          <SelectItem value="ipad-pro">iPad Pro</SelectItem>
          <SelectItem value="ipad-air">iPad Air</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="retro-select">
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="es">Spanish</SelectItem>
          <SelectItem value="fr">French</SelectItem>
          <SelectItem value="de">German</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ContextualInfo;