"use client";

interface ChangeCourseBannerProps {
  onSelectRoadmap: (roadmap: string) => void;
}

export default function ChangeCourseBanner({
  onSelectRoadmap,
}: ChangeCourseBannerProps) {
  return (
    <div className="bg-primary text-primary-foreground px-6 py-4">
      <div className="max-w-5xl">
        <h2 className="text-base font-semibold">Change Your Course</h2>
      </div>
    </div>
  );
}
