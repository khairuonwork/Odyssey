// Simpan sebagai: components/AvailableCourseCard.tsx
import Link from "next/link";

interface AvailableCourseCardProps {
  title: string;
  description: string;
  lessons: number;
  href: string; // Tautan tujuan
}

export default function AvailableCourseCard({
  title,
  description,
  lessons,
  href,
}: AvailableCourseCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col border-2 border-black rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
    >
      {/* Header Kartu */}
      <div className="bg-[#213555] p-4">
        <h3 className="text-xl font-bold text-white truncate">{title}</h3>
      </div>
      {/* Body Kartu */}
      <div className="p-4 bg-white flex-1 flex flex-col">
        <h4 className="font-semibold text-black">About {title}</h4>
        <p className="text-sm text-gray-600 mt-2 mb-4 flex-1">
          {description}
        </p>
        <div className="text-right text-sm font-medium text-gray-700">
          {lessons} Lessons
        </div>
      </div>
    </Link>
  );
}