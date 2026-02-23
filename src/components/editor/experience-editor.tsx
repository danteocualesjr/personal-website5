"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/store/resume-store";
import { Plus, Trash2, Sparkles, Loader2, GripVertical } from "lucide-react";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { toast } from "sonner";

export function ExperienceEditor() {
  const { resumeData, updateExperience, addExperience, removeExperience } =
    useResumeStore();
  const [enhancingId, setEnhancingId] = useState<string | null>(null);

  if (!resumeData) return null;

  const enhanceHighlights = async (expId: string, highlights: string[]) => {
    if (highlights.length === 0) return;
    setEnhancingId(expId);
    try {
      const res = await fetch("/api/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: highlights.join("\n"),
          type: "bullets",
        }),
      });
      if (!res.ok) throw new Error();
      const { enhanced } = await res.json();
      const newHighlights = enhanced
        .split("\n")
        .map((h: string) => h.replace(/^[-•]\s*/, "").trim())
        .filter(Boolean);
      updateExperience(expId, { highlights: newHighlights });
      toast.success("Bullet points enhanced");
    } catch {
      toast.error("Enhancement failed");
    } finally {
      setEnhancingId(null);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Experience</h3>
        <Button
          variant="outline"
          size="sm"
          className="h-7 gap-1 text-xs"
          onClick={() =>
            addExperience({
              id: uuid(),
              company: "",
              position: "",
              startDate: "",
              endDate: "",
              location: "",
              highlights: [],
            })
          }
        >
          <Plus className="h-3 w-3" />
          Add
        </Button>
      </div>

      <div className="space-y-4">
        {resumeData.experience.map((exp) => (
          <div
            key={exp.id}
            className="rounded-lg border border-gray-200 bg-gray-50/50 p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GripVertical className="h-4 w-4 text-gray-300" />
                <span className="text-xs font-medium text-gray-700">
                  {exp.position || exp.company || "New Position"}
                </span>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 gap-1 px-2 text-xs text-neutral-600"
                  onClick={() => enhanceHighlights(exp.id, exp.highlights)}
                  disabled={enhancingId === exp.id}
                >
                  {enhancingId === exp.id ? (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  ) : (
                    <Sparkles className="h-3 w-3" />
                  )}
                  Enhance
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2 text-xs text-red-500 hover:text-red-700"
                  onClick={() => removeExperience(exp.id)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs text-gray-500">Position</Label>
                <Input
                  value={exp.position}
                  onChange={(e) =>
                    updateExperience(exp.id, { position: e.target.value })
                  }
                  className="mt-1 text-sm"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500">Company</Label>
                <Input
                  value={exp.company}
                  onChange={(e) =>
                    updateExperience(exp.id, { company: e.target.value })
                  }
                  className="mt-1 text-sm"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500">Start Date</Label>
                <Input
                  value={exp.startDate}
                  onChange={(e) =>
                    updateExperience(exp.id, { startDate: e.target.value })
                  }
                  className="mt-1 text-sm"
                  placeholder="Jan 2022"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500">End Date</Label>
                <Input
                  value={exp.endDate}
                  onChange={(e) =>
                    updateExperience(exp.id, { endDate: e.target.value })
                  }
                  className="mt-1 text-sm"
                  placeholder="Present"
                />
              </div>
              <div className="col-span-2">
                <Label className="text-xs text-gray-500">Location</Label>
                <Input
                  value={exp.location}
                  onChange={(e) =>
                    updateExperience(exp.id, { location: e.target.value })
                  }
                  className="mt-1 text-sm"
                />
              </div>
            </div>

            <div className="mt-3">
              <Label className="text-xs text-gray-500">
                Highlights (one per line)
              </Label>
              <textarea
                value={exp.highlights.join("\n")}
                onChange={(e) =>
                  updateExperience(exp.id, {
                    highlights: e.target.value.split("\n"),
                  })
                }
                rows={4}
                className="mt-1 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
