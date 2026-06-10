import {
  Building2,
  GraduationCap,
  PenTool,
  Settings,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { siteContent } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ProcessIconId } from "@/types/site";
import styles from "./process.module.css";

const processIcons: Record<ProcessIconId, LucideIcon> = {
  sparkles: Sparkles,
  "pen-tool": PenTool,
  "building-2": Building2,
  "graduation-cap": GraduationCap,
  settings: Settings,
  "trending-up": TrendingUp,
};

function ProcessIcon({ name }: { name: ProcessIconId }) {
  const Icon = processIcons[name];
  return <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />;
}

type Step = (typeof siteContent.process.steps)[number];

function ProcessCard({ step, index }: { step: Step; index: number }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHead}>
        <span className={styles.iconBox}>
          <ProcessIcon name={step.icon} />
        </span>
        <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className={styles.title}>{step.title}</h3>
      <p className={styles.text}>{step.description}</p>
    </article>
  );
}

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

export function Process() {
  const { process } = siteContent;
  const steps = process.steps;
  const rowsOf2 = chunk(steps, 2);
  const rowsOf3 = chunk(steps, 3);

  return (
    <section id="surec" className="scroll-mt-24 bg-background pt-10 pb-14 sm:pt-12 lg:pt-16 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Metodolojimiz"
          title={process.title}
          subtitle={process.subtitle}
          align="center"
          className="mx-auto"
        />

        <div className={styles.wrapper}>
          <table className={`${styles.table} ${styles.tableNarrow}`} role="presentation">
            <tbody>
              {rowsOf2.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((step, cellIndex) => {
                    const index = rowIndex * 2 + cellIndex;
                    return (
                      <td key={step.id} className={styles.cell}>
                        <ProcessCard step={step} index={index} />
                      </td>
                    );
                  })}
                  {row.length === 1 && <td className={styles.cell} aria-hidden />}
                </tr>
              ))}
            </tbody>
          </table>

          <table className={styles.tableWide} role="presentation">
            <tbody>
              {rowsOf3.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((step, cellIndex) => {
                    const index = rowIndex * 3 + cellIndex;
                    return (
                      <td key={step.id} className={styles.cellWide}>
                        <ProcessCard step={step} index={index} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
