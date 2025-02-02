interface Difference {
  id: string;
  type: 'text' | 'image';
  oldContent: string;
  newContent: string;
  accepted: boolean;
  evidence?: {
    screenshot?: string;
    recording?: string;
  };
}

interface OriginalDocumentProps {
  differences: Difference[];
}

export const OriginalDocument = ({ differences }: OriginalDocumentProps) => {
  return (
    <div className="border-r border-gray-200 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Original Document</h2>
      <div className="space-y-6">
        <div className="retro-card flex justify-center items-center">
          <img 
            src="/lovable-uploads/7d96ec91-4dc0-4a13-89a8-e9e73156ee33.png"
            alt="Standard plan pricing"
            className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};