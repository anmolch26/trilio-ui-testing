import React, { useEffect, useState } from "react";
import Navbar from "@/components/NavBar";
import LegacyFooter from "@/components/LegacyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

type Metric = {
  category: string;
  name: string;
  unit?: string;
  definition: string;
  formula?: string;
  key?: string;
  insights?: string[];
  deepLink?: string;
  // normalized metadata fields from API metric_metadata
  metaOverview?: string;
  metaInsights?: string[];
  metaBreakdown?: Record<string, string> | string[];
  metaDimensions?: string[];
  metaRelated?: string[];
  metaExamplePrompt?: string;
  metaExampleResponse?: { title?: string; metric?: string; value?: string };
  metaQuery?: string;
};
// All content will be sourced from API metric_metadata; no hardcoded enrichments

// Utility: Extract clean component names from a formula string
function extractFormulaComponents(formula?: string): string[] {
  if (!formula) return [];
  // Replace sum(x) with x, remove parens, normalize spaces
  let f = formula
    .replace(/sum\s*\(([^)]+)\)/gi, "$1")
    .replace(/[()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  // Split on common math operators
  const raw = f.split(/\+|\-|×|÷|\*|\//g);
  const toTitle = (s: string) =>
    s
      .replace(/[^a-z0-9_\s-]/gi, "")
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase()
      .replace(/\b\w/g, (m) => m.toUpperCase());
  const seen = new Set<string>();
  const out: string[] = [];
  for (const part of raw) {
    const p = toTitle(part);
    if (p && !seen.has(p)) {
      seen.add(p);
      out.push(p);
    }
  }
  return out;
}

// Fallback formulas for common components (temporary/dummy definitions)
const DUMMY_FORMULAS: Record<string, string> = {
  "net-sales": "Gross Sales - Returns - Discounts",
  "gross-sales": "Unit Price × Units Sold",
  "discounts": "sum(discount_amount)",
  "discount": "sum(discount_amount)",
  "shipping": "sum(shipping_price)",
  "tax": "sum(taxes)",
  "taxes": "sum(taxes)",
  "additional-fees": "sum(additional_fees)",
  "duties": "sum(duties)",
  "ad-spend": "sum(spends)",
  "units-sold": "sum(quantity)",
  "aov": "Total Revenue ÷ Total Orders",
  "mer": "Total Revenue ÷ Total Marketing Spend",
  "gross-profit": "Net Sales - COGS",
  "gross-margin": "(Gross Profit ÷ Net Sales) × 100",
  "cogs": "Opening Inventory + Purchases - Closing Inventory",
  "returns": "sum(returns_amount)",
};

const Sidebar: React.FC<{ items: Metric[]; active: number; setActive: (i: number) => void }> = ({ items, active, setActive }) => {
  return (
    <div className="lg:w-1/5 -ml-6">
      <div className="sticky top-24">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Trilio Metrics</CardTitle>
          </CardHeader>
          <CardContent
            className="p-0 max-h-[calc(100vh-9rem)] overflow-y-auto overscroll-contain"
            onWheel={(e) => e.stopPropagation()}
          >
            <nav className="space-y-1">
              {items.map((m, i) => (
                <button
                  key={m.key}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-4 py-3 transition-all duration-200 ${
                    active === i
                      ? "bg-purple-50 text-purple-600 border-r-2 border-purple-500"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const MetricCard: React.FC<{
  metric: Metric;
  allMetrics: Metric[];
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}> = ({ metric, allMetrics, onPrev, onNext, hasPrev, hasNext }) => {
  return (
    <Card id={metric.key} className="border-muted/40 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            {metric.deepLink ? (
              <Link
                to={metric.deepLink}
                className={`mt-1 font-bold inline-block ${
                  (metric.key || "").toLowerCase() === "total-sales" ? "text-4xl" : "text-2xl"
                }`}
              >
                {metric.name}
              </Link>
            ) : (
              <h2
                className={`mt-1 font-bold ${
                  (metric.key || "").toLowerCase() === "total-sales" ? "text-4xl" : "text-2xl"
                }`}
              >
                {metric.name}
              </h2>
            )}
          </div>
          {/* top navigation removed as requested */}
        </div>

        <div className="mt-6 space-y-4">
          <section>
            <h3 className="text-lg font-semibold text-muted-foreground mb-1">
              Overview
            </h3>
            <p className="text-base leading-7 text-foreground/90">
              {metric.metaOverview || metric.definition || "Not available"}
            </p>
          </section>

          {metric.formula && (
            <section>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                Formula
              </h3>
              <div className="rounded-md bg-muted px-4 py-3 text-base font-mono">
                {metric.formula}
              </div>
            </section>
          )}

          {(metric.insights?.length || metric.metaInsights?.length) && (
            <section>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                Insights and Actions
              </h3>
              <ul className="list-none pl-0 text-base leading-7 space-y-2">
                {[...(metric.insights || []), ...(metric.metaInsights || [])].map((tip, idx) => (
                  <li key={idx} className="text-foreground/90">
                    {tip}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Optional Detailed Breakdown. Prefer parts parsed from formula; fallback to enrichments. */}
          {(extractFormulaComponents(metric.formula).length > 0 || metric.metaBreakdown) && (
            <section>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                Detailed Breakdown
              </h3>
              <ul className="list-disc pl-5 text-base leading-7 space-y-1">
                {(extractFormulaComponents(metric.formula).length
                  ? extractFormulaComponents(metric.formula)
                  : Array.isArray(metric.metaBreakdown)
                    ? (metric.metaBreakdown as string[])
                    : Object.keys((metric.metaBreakdown as Record<string, string>) || {})
                ).map((b, i) => {
                  // If the item is a simple component name, try to find its formula in all metrics
                  const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                  const comp = b.trim();
                  const key = normalize(comp);
                  const match = allMetrics.find((m) => normalize(m.name || "") === key);
                  const compFormula = match?.formula || DUMMY_FORMULAS[key];
                  return (
                    <li key={i}>
                      {comp}
                      {compFormula && (
                        <span className="ml-2 font-mono text-sm text-muted-foreground">= {compFormula}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {/* Data Sources removed as requested */}

          {/* Optional Suggested Dimensions */}
          {metric.metaDimensions && (
            <section>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                Suggested Dimensions
              </h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {metric.metaDimensions!.map((d, i) => (
                  <span key={i} className="rounded-full border px-2 py-1 bg-background">
                    {d}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Optional Related Metrics */}
          {metric.metaRelated && (
            <section>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                Related Metrics
              </h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {metric.metaRelated!.map((d, i) => (
                  <span key={i} className="rounded-full border px-2 py-1 bg-background">
                    {d}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Notes section removed as requested */}

          {/* Optional Example Use (Prompt/Response card) */}
          {(metric.metaExamplePrompt || metric.metaExampleResponse) && (
            <section>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                Example Use
              </h3>
              {metric.metaExamplePrompt && (
                <div className="mb-4">
                  <div className="text-sm font-semibold mb-1">Prompt</div>
                  <blockquote className="border-l-4 pl-4 text-base text-muted-foreground">
                    {metric.metaExamplePrompt}
                  </blockquote>
                </div>
              )}
              {metric.metaExampleResponse && (
                <div>
                  <div className="text-sm font-semibold mb-2">Response</div>
                  <div className="rounded-lg border bg-card">
                    {typeof metric.metaExampleResponse === "string" ? (
                      <div className="p-4 text-base">{metric.metaExampleResponse}</div>
                    ) : (
                      <>
                        <div className="px-4 py-3 border-b text-sm font-medium">
                          {metric.metaExampleResponse!.title || "Response"}
                        </div>
                        <div className="p-4">
                          {metric.metaExampleResponse!.metric && (
                            <div className="text-sm text-muted-foreground mb-2">
                              {metric.metaExampleResponse!.metric}
                            </div>
                          )}
                          {metric.metaExampleResponse!.value && (
                            <div className="text-3xl font-bold">
                              {metric.metaExampleResponse!.value}
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Optional Query */}
          {metric.metaQuery && (
            <section>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                Query
              </h3>
              <pre className="rounded-md bg-muted px-4 py-3 text-sm font-mono whitespace-pre-wrap">
{metric.metaQuery}
              </pre>
            </section>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const DataDictionary: React.FC = () => {
  const [active, setActive] = useState(0);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { metricSlug } = useParams();

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://staging.trilio.ai/api/analytics/v1/metrics-definition");
        const json = await res.json();
        const apiMetrics: Metric[] = (json?.data?.metrics || []).map((m: any) => {
          const meta = m.metric_metadata || {};
          const normalizedBreakdown = meta["Detailed Breakdown"] || meta["detailed_breakdown"];
          return {
            category: m.category,
            name: m.metric_name,
            unit: m.unit || undefined,
            definition: m.definition,
            formula: m.formula || undefined,
            key: (m.key_name || m.metric_name || "").toString().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
            deepLink: m.deep_link,
            metaOverview: meta["Overview"] || meta["overview"],
            metaInsights: meta["Insights and Actions"] || meta["insights_and_actions"] || meta["insights"],
            metaBreakdown: normalizedBreakdown,
            metaDimensions: meta["Suggested Dimensions"] || meta["suggested_dimensions"],
            metaRelated: meta["Related Metrics"] || meta["related_metrics"],
            metaExamplePrompt: (meta["Example Use"] && meta["Example Use"].prompt) || meta["example_prompt"],
            metaExampleResponse: (meta["Example Use"] && meta["Example Use"].response) || meta["example_response"],
            metaQuery: meta["Query"] || meta["query"],
          } as Metric;
        });
        setMetrics(apiMetrics);
        if (metricSlug) {
          const idx = apiMetrics.findIndex((m) => m.key === metricSlug.toLowerCase());
          setActive(idx >= 0 ? idx : 0);
        } else {
          setActive(0);
        }
      } catch (e) {
        setError("Failed to load metrics.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [metricSlug]);

  const goPrev = () => setActive((i) => Math.max(0, i - 1));
  const goNext = () => setActive((i) => Math.min(Math.max(metrics.length - 1, 0), i + 1));

  // Sync URL when active metric changes
  useEffect(() => {
    if (metrics.length === 0) return;
    const slug = metrics[active]?.key;
    if (!slug) return;
    navigate(`/resources/data-dictionary/${slug}`, { replace: true });
  }, [active, metrics, navigate]);
  return (
    <div className="h-screen">
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-36 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mt-2">Data Dictionary</h1>
            <p className="text-xl mt-3 max-w-3xl mx-auto opacity-90">
              Explore standardized definitions, formulas and usage guidance for key ecommerce performance metrics.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 py-12 -mt-10 relative">
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar items={metrics} active={active} setActive={(i) => setActive(i)} />
            <div className="lg:w-4/5 space-y-6 -ml-2">
              {loading ? (
                <div className="text-sm text-muted-foreground">Loading metrics…</div>
              ) : error ? (
                <div className="text-sm text-red-600">{error}</div>
              ) : metrics.length > 0 ? (
                <MetricCard
                  key={metrics[active]?.key}
                  metric={metrics[active]}
                  allMetrics={metrics}
                  onPrev={goPrev}
                  onNext={goNext}
                  hasPrev={active > 0}
                  hasNext={active < metrics.length - 1}
                />
              ) : (
                <div className="text-sm text-muted-foreground">No metrics available.</div>
              )}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <button
                  onClick={goPrev}
                  disabled={active === 0}
                  className="inline-flex items-center gap-1 hover:text-foreground disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" /> Previous
                </button>
                <button
                  onClick={goNext}
                  disabled={metrics.length === 0 || active === metrics.length - 1}
                  className="inline-flex items-center gap-1 hover:text-foreground disabled:opacity-50"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     <LegacyFooter />
    </div>
  );
};

export default DataDictionary;


