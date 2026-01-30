import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ExternalLink } from "lucide-react";
import { getCandidateLinks } from "@/data/candidates";
import { useNavigate, useLocation } from "react-router-dom";

export const CandidateSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const candidateLinks = getCandidateLinks();

  const getCurrentCandidateId = () => {
    const path = location.pathname;
    if (path === "/" || path === "") return null;
    return path.replace("/", "");
  };

  const currentId = getCurrentCandidateId();

  return (
    <Card className="border border-border/70 bg-card/90 shadow-sm mb-8">
      <CardContent className="p-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Select Candidate</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {candidateLinks.map((link) => (
              <Button
                key={link.id}
                variant={currentId === link.id ? "default" : "outline"}
                size="sm"
                onClick={() => navigate(link.url)}
                className={
                  currentId === link.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card hover:bg-primary/10 border-border/70"
                }
              >
                {link.name}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
