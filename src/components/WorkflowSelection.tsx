import React, { useState } from 'react';
import { Card } from "@/components/ui/card";

const workflows = [
  { id: 1, title: "Sign up for free trial", description: "Complete the sign-up process for a free trial" },
  { id: 2, title: "Change profile picture", description: "Update profile picture in settings" },
  { id: 3, title: "Complete checkout", description: "Go through the checkout process" },
  { id: 4, title: "Post new content", description: "Create and publish new content" },
];

const WorkflowSelection = () => {
  const [selectedWorkflows, setSelectedWorkflows] = useState<number[]>([]);

  const toggleWorkflow = (id: number) => {
    setSelectedWorkflows(prev => 
      prev.includes(id) 
        ? prev.filter(wId => wId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
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
  );
};

export default WorkflowSelection;