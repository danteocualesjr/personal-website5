"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/store/resume-store";
import { Plus, Trash2 } from "lucide-react";
import { v4 as uuid } from "uuid";

export function ProjectsEditor() {
  const { resumeData, updateProject, addProject, removeProject } =
    useResumeStore();

  if (!resumeData) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Projects</h3>
        <Button
          variant="outline"
          size="sm"
          className="h-7 gap-1 text-xs"
          onClick={() =>
            addProject({
              id: uuid(),
              name: "",
              description: "",
              highlights: [],
            })
          }
        >
          <Plus className="h-3 w-3" />
          Add
        </Button>
      </div>

      <div className="space-y-4">
        {resumeData.projects.map((proj) => (
          <div
            key={proj.id}
            className="rounded-lg border border-gray-200 bg-gray-50/50 p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-700">
                {proj.name || "New Project"}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs text-red-500 hover:text-red-700"
                onClick={() => removeProject(proj.id)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>

            <div className="space-y-3">
              <div>
                <Label className="text-xs text-gray-500">Project Name</Label>
                <Input
                  value={proj.name}
                  onChange={(e) =>
                    updateProject(proj.id, { name: e.target.value })
                  }
                  className="mt-1 text-sm"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500">Description</Label>
                <Input
                  value={proj.description}
                  onChange={(e) =>
                    updateProject(proj.id, { description: e.target.value })
                  }
                  className="mt-1 text-sm"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500">
                  Highlights (one per line)
                </Label>
                <textarea
                  value={proj.highlights.join("\n")}
                  onChange={(e) =>
                    updateProject(proj.id, {
                      highlights: e.target.value.split("\n"),
                    })
                  }
                  rows={3}
                  className="mt-1 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-100"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
