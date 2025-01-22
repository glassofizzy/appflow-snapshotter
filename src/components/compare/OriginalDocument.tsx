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
        {differences.map((diff) => (
          <div key={`original-${diff.id}`} className="retro-card">
            {diff.type === 'text' ? (
              <p className="text-gray-700">{diff.oldContent}</p>
            ) : (
              <img 
                src={diff.oldContent} 
                alt="Original version" 
                className="w-full h-auto object-contain rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};