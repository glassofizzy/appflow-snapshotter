import React from 'react';
import AppIdentification from '@/components/AppIdentification';
import ContextualInfo from '@/components/ContextualInfo';
import WorkflowSelection from '@/components/WorkflowSelection';
import Authentication from '@/components/Authentication';
import { useToast } from "@/hooks/use-toast";
import { Play } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleWalkthrough = async () => {
    try {
      toast({
        title: "Starting walkthrough",
        description: "The automated process has begun. Please wait while we capture your screenshots.",
      });
      
      // Here you would integrate with your backend
      // await startWalkthrough();
      
      toast({
        title: "Walkthrough completed",
        description: "Your screenshots have been captured and stored successfully.",
      });

      // Navigate to summary page
      navigate('/summary');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to complete the walkthrough. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">
            App Screenshot Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate beautiful, contextual screenshots of your app in seconds
          </p>
        </div>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">1. Identify Your App</h2>
          <AppIdentification />
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">2. Set Context</h2>
          <ContextualInfo />
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">3. Select Workflow</h2>
          <WorkflowSelection />
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">4. Authentication</h2>
          <Authentication />
        </section>

        <div className="flex justify-center pt-8">
          <button
            onClick={handleWalkthrough}
            className="retro-button flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Get app screenshots
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;