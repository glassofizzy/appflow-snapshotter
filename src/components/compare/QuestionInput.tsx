import { MessageCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface QuestionInputProps {
  question: string;
  setQuestion: (value: string) => void;
  onSubmit: () => void;
}

export const QuestionInput = ({ question, setQuestion, onSubmit }: QuestionInputProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div className="max-w-2xl mx-auto space-y-4">
        <Textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question about the changes..."
          className="retro-input min-h-[100px]"
        />
        <button 
          onClick={onSubmit}
          className="retro-button w-full flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Submit Question
        </button>
      </div>
    </div>
  );
};