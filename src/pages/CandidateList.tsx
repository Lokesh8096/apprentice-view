import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

const CandidateList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/40 to-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-primary/10">
            <Lock className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-3">Access Restricted</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Candidate reports are only accessible via direct shareable links.
          Contact your administrator for a specific report link.
        </p>
        <Button disabled className="cursor-not-allowed opacity-60">
          No Public Reports Available
        </Button>
      </div>
    </div>
  );
};

export default CandidateList;
