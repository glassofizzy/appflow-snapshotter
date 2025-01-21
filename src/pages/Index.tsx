import React from 'react';
import AppIdentification from '@/components/AppIdentification';
import ContextualInfo from '@/components/ContextualInfo';
import WorkflowSelection from '@/components/WorkflowSelection';

const Index = () => {
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
      </div>
    </div>
  );
};

export default Index;