"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useResumeStore } from "@/store/resume-store";
import { Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export function BasicsEditor() {
  const { resumeData, updateBasics } = useResumeStore();
  const [enhancingField, setEnhancingField] = useState<string | null>(null);

  if (!resumeData) return null;
  const { basics } = resumeData;

  const enhanceField = async (field: string, currentValue: string) => {
    if (!currentValue.trim()) return;
    setEnhancingField(field);
    try {
      const res = await fetch("/api/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: currentValue,
          type: field === "summary" ? "summary" : "text",
        }),
      });
      if (!res.ok) throw new Error();
      const { enhanced } = await res.json();
      updateBasics(field, enhanced);
      toast.success("Enhanced with AI");
    } catch {
      toast.error("Enhancement failed. Check your API key.");
    } finally {
      setEnhancingField(null);
    }
  };

  const fields = [
    { key: "name", label: "Full Name", type: "input" },
    { key: "headline", label: "Professional Title", type: "input" },
    { key: "email", label: "Email", type: "input" },
    { key: "phone", label: "Phone", type: "input" },
    { key: "location", label: "Location", type: "input" },
    { key: "linkedin", label: "LinkedIn", type: "input" },
    { key: "website", label: "Website", type: "input" },
    { key: "summary", label: "Professional Summary", type: "textarea" },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-900">Basic Information</h3>
      {fields.map(({ key, label, type }) => (
        <div key={key}>
          <div className="flex items-center justify-between mb-1.5">
            <Label className="text-xs text-gray-600">{label}</Label>
            {(key === "summary" || key === "headline") && (
              <Button
                variant="ghost"
                size="sm"
                className="h-6 gap-1 px-2 text-xs text-blue-600 hover:text-blue-700"
                onClick={() =>
                  enhanceField(key, basics[key as keyof typeof basics])
                }
                disabled={enhancingField === key}
              >
                {enhancingField === key ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : (
                  <Sparkles className="h-3 w-3" />
                )}
                AI Enhance
              </Button>
            )}
          </div>
          {type === "textarea" ? (
            <Textarea
              value={basics[key as keyof typeof basics]}
              onChange={(e) => updateBasics(key, e.target.value)}
              rows={4}
              className="text-sm"
            />
          ) : (
            <Input
              value={basics[key as keyof typeof basics]}
              onChange={(e) => updateBasics(key, e.target.value)}
              className="text-sm"
            />
          )}
        </div>
      ))}
    </div>
  );
}
