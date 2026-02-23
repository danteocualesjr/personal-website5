"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/store/resume-store";
import { Plus, Trash2 } from "lucide-react";
import { v4 as uuid } from "uuid";

export function EducationEditor() {
  const { resumeData, updateEducation, addEducation, removeEducation } =
    useResumeStore();

  if (!resumeData) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Education</h3>
        <Button
          variant="outline"
          size="sm"
          className="h-7 gap-1 text-xs"
          onClick={() =>
            addEducation({
              id: uuid(),
              institution: "",
              degree: "",
              field: "",
              startDate: "",
              endDate: "",
            })
          }
        >
          <Plus className="h-3 w-3" />
          Add
        </Button>
      </div>

      <div className="space-y-4">
        {resumeData.education.map((edu) => (
          <div
            key={edu.id}
            className="rounded-lg border border-gray-200 bg-gray-50/50 p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-700">
                {edu.institution || "New Education"}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs text-red-500 hover:text-red-700"
                onClick={() => removeEducation(edu.id)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <Label className="text-xs text-gray-500">Institution</Label>
                <Input
                  value={edu.institution}
                  onChange={(e) =>
                    updateEducation(edu.id, { institution: e.target.value })
                  }
                  className="mt-1 text-sm"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500">Degree</Label>
                <Input
                  value={edu.degree}
                  onChange={(e) =>
                    updateEducation(edu.id, { degree: e.target.value })
                  }
                  className="mt-1 text-sm"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500">Field of Study</Label>
                <Input
                  value={edu.field}
                  onChange={(e) =>
                    updateEducation(edu.id, { field: e.target.value })
                  }
                  className="mt-1 text-sm"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500">Start Year</Label>
                <Input
                  value={edu.startDate}
                  onChange={(e) =>
                    updateEducation(edu.id, { startDate: e.target.value })
                  }
                  className="mt-1 text-sm"
                  placeholder="2018"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500">End Year</Label>
                <Input
                  value={edu.endDate}
                  onChange={(e) =>
                    updateEducation(edu.id, { endDate: e.target.value })
                  }
                  className="mt-1 text-sm"
                  placeholder="2022"
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500">GPA (optional)</Label>
                <Input
                  value={edu.gpa || ""}
                  onChange={(e) =>
                    updateEducation(edu.id, { gpa: e.target.value })
                  }
                  className="mt-1 text-sm"
                  placeholder="3.8"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
