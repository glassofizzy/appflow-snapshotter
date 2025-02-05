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
            src="/lovable-uploads/2560d972-fbc1-4dc3-8b95-0e84ffb591d3.png"
            alt="Original Profile"
            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};