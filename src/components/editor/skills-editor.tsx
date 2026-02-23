"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/store/resume-store";
import { Plus, Trash2 } from "lucide-react";

export function SkillsEditor() {
  const { resumeData, updateSkillCategory, addSkillCategory, removeSkillCategory } =
    useResumeStore();

  if (!resumeData) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Skills</h3>
        <Button
          variant="outline"
          size="sm"
          className="h-7 gap-1 text-xs"
          onClick={addSkillCategory}
        >
          <Plus className="h-3 w-3" />
          Add Category
        </Button>
      </div>

      <div className="space-y-3">
        {resumeData.skills.map((group, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-gray-50/50 p-3"
          >
            <div className="mb-2 flex items-center justify-between">
              <Label className="text-xs text-gray-500">Category</Label>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs text-red-500 hover:text-red-700"
                onClick={() => removeSkillCategory(index)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
            <Input
              value={group.category}
              onChange={(e) =>
                updateSkillCategory(index, e.target.value, group.items)
              }
              className="mb-2 text-sm"
              placeholder="e.g., Programming Languages"
            />
            <Label className="text-xs text-gray-500">
              Skills (comma-separated)
            </Label>
            <Input
              value={group.items.join(", ")}
              onChange={(e) =>
                updateSkillCategory(
                  index,
                  group.category,
                  e.target.value.split(",").map((s) => s.trim())
                )
              }
              className="mt-1 text-sm"
              placeholder="JavaScript, TypeScript, Python"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
