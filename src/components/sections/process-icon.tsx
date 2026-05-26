import {
  Building2,
  GraduationCap,
  PenTool,
  Settings,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  "pen-tool": PenTool,
  "building-2": Building2,
  "graduation-cap": GraduationCap,
  settings: Settings,
  "trending-up": TrendingUp,
};

type ProcessIconProps = {
  name: string;
  className?: string;
};

export function ProcessIcon({ name, className }: ProcessIconProps) {
  const Icon = icons[name] ?? Sparkles;
  return <Icon className={className} strokeWidth={1.75} />;
}
