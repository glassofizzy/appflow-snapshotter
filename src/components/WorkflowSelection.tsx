import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const workflows = [
  { id: 1, title: "Sign up for free trial", description: "Complete the sign-up process for a free trial" },
  { id: 2, title: "Change profile picture", description: "Update profile picture in settings" },
  { id: 3, title: "Complete checkout", description: "Go through the checkout process" },
  { id: 4, title: "Post new content", description: "Create and publish new content" },
];

const WorkflowSelection = () => {
  const [selectedWorkflows, setSelectedWorkflows] = useState<number[]>([]);
  const [customWorkflow, setCustomWorkflow] = useState('');

  const toggleWorkflow = (id: number) => {
    setSelectedWorkflows(prev => 
      prev.includes(id) 
        ? prev.filter(wId => wId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-8 w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workflows.map((workflow) => (
          <Card 
            key={workflow.id} 
            className={`retro-card cursor-pointer transition-all duration-200
              ${selectedWorkflows.includes(workflow.id) ? 'shadow-[4px_4px_0px_0px_#ffc000]' : ''}`}
            onClick={() => toggleWorkflow(workflow.id)}
          >
            <h3 className="text-xl font-bold mb-2">{workflow.title}</h3>
            <p className="text-gray-600">{workflow.description}</p>
          </Card>
        ))}
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Custom Workflow Steps</h3>
        <p className="text-gray-600">Write out the user steps and screens that are important to be captured:</p>
        <Textarea
          value={customWorkflow}
          onChange={(e) => setCustomWorkflow(e.target.value)}
          placeholder="Example: 1. User lands on homepage&#10;2. User clicks sign up button&#10;3. User fills registration form&#10;4. User submits form"
          className="min-h-[200px] retro-input"
        />
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            // AI generation functionality will be implemented here
            console.log('AI generation requested');
          }}
          className="text-sm text-primary hover:underline inline-flex items-center gap-2"
        >
          ✨ Let AI generate a detailed task flow for you
        </a>
      </div>
    </div>
  );
};

export default WorkflowSelection;