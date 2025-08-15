import React, { useMemo, useState } from "react";

interface ChannelRow {
  channel: string;
  marketing: number;
  sales: number;
  other: number;
  customers: number;
}

const currency = (n: number) =>
  isFinite(n)
    ? n.toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      })
    : "–";
const fixed2 = (n: number) => (isFinite(n) ? n.toFixed(2) : "–");

const BasicCACCalculator: React.FC = () => {
  const [marketing, setMarketing] = useState<number>(15000);
  const [sales, setSales] = useState<number>(8000);
  const [other, setOther] = useState<number>(2000);
  const [customers, setCustomers] = useState<number>(125);

  const total = marketing + sales + other;
  const cac = customers > 0 ? total / customers : NaN;

  return (
    <div className="rounded-xl border border-gray-200 p-4 md:p-5 bg-white text-black">
      <h3 className="text-xl font-semibold mb-3">Basic CAC Calculator</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <div>
          <label className="text-sm text-gray-700">Total Marketing Spend</label>
          <input
            type="number"
            value={marketing}
            onChange={(e) => setMarketing(Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            min={0}
          />
        </div>
        <div>
          <label className="text-sm text-gray-700">Total Sales Costs</label>
          <input
            type="number"
            value={sales}
            onChange={(e) => setSales(Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            min={0}
          />
        </div>
        <div>
          <label className="text-sm text-gray-700">
            Additional Acquisition Costs
          </label>
          <input
            type="number"
            value={other}
            onChange={(e) => setOther(Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            min={0}
          />
        </div>
        <div>
          <label className="text-sm text-gray-700">
            Number of New Customers
          </label>
          <input
            type="number"
            value={customers}
            onChange={(e) => setCustomers(Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            min={0}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-gray-900">
        <div className="text-sm">
          Total Cost: <strong>{currency(total)}</strong>
        </div>
        <div className="text-sm">
          New Customers: <strong>{isFinite(cac) ? customers : 0}</strong>
        </div>
        <div className="ml-auto text-lg font-semibold">
          Your CAC = {isFinite(cac) ? currency(cac) : "–"}
        </div>
      </div>
    </div>
  );
};

const ChannelCACCalculator: React.FC = () => {
  const [rows, setRows] = useState<ChannelRow[]>([
    {
      channel: "Google Ads",
      marketing: 8000,
      sales: 2000,
      other: 500,
      customers: 50,
    },
    {
      channel: "Facebook",
      marketing: 6000,
      sales: 1500,
      other: 300,
      customers: 45,
    },
    { channel: "Email", marketing: 500, sales: 500, other: 100, customers: 15 },
    {
      channel: "Organic",
      marketing: 0,
      sales: 1000,
      other: 200,
      customers: 25,
    },
  ]);

  const totals = useMemo(() => {
    return rows.reduce(
      (acc, r) => {
        acc.marketing += r.marketing;
        acc.sales += r.sales;
        acc.other += r.other;
        acc.customers += r.customers;
        return acc;
      },
      { marketing: 0, sales: 0, other: 0, customers: 0 }
    );
  }, [rows]);

  const overallCAC =
    totals.customers > 0
      ? (totals.marketing + totals.sales + totals.other) / totals.customers
      : NaN;

  const update = (i: number, key: keyof ChannelRow, value: string) => {
    setRows((prev) =>
      prev.map((r, idx) =>
        idx === i
          ? { ...r, [key]: key === "channel" ? value : Number(value) }
          : r
      )
    );
  };

  const addRow = () =>
    setRows((prev) => [
      ...prev,
      {
        channel: "New Channel",
        marketing: 0,
        sales: 0,
        other: 0,
        customers: 0,
      },
    ]);
  const removeRow = (i: number) =>
    setRows((prev) => prev.filter((_, idx) => idx !== i));

  return (
    <div className="rounded-xl border border-gray-200 p-4 md:p-5 bg-white text-black">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-semibold">Advanced CAC by Channel</h3>
        <button
          onClick={addRow}
          className="text-sm px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50"
        >
          Add Row
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[720px] w-full border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-2 border-b">Channel</th>
              <th className="text-right p-2 border-b">Marketing Spend</th>
              <th className="text-right p-2 border-b">Sales Costs</th>
              <th className="text-right p-2 border-b">Other Costs</th>
              <th className="text-right p-2 border-b">New Customers</th>
              <th className="text-right p-2 border-b">CAC</th>
              <th className="p-2 border-b" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => {
              const cac =
                r.customers > 0
                  ? (r.marketing + r.sales + r.other) / r.customers
                  : NaN;
              return (
                <tr key={i}>
                  <td className="p-2 border-b">
                    <input
                      value={r.channel}
                      onChange={(e) => update(i, "channel", e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-2 py-1"
                    />
                  </td>
                  <td className="p-2 border-b text-right">
                    <input
                      type="number"
                      value={r.marketing}
                      onChange={(e) => update(i, "marketing", e.target.value)}
                      className="w-full text-right border border-gray-300 rounded-md px-2 py-1"
                    />
                  </td>
                  <td className="p-2 border-b text-right">
                    <input
                      type="number"
                      value={r.sales}
                      onChange={(e) => update(i, "sales", e.target.value)}
                      className="w-full text-right border border-gray-300 rounded-md px-2 py-1"
                    />
                  </td>
                  <td className="p-2 border-b text-right">
                    <input
                      type="number"
                      value={r.other}
                      onChange={(e) => update(i, "other", e.target.value)}
                      className="w-full text-right border border-gray-300 rounded-md px-2 py-1"
                    />
                  </td>
                  <td className="p-2 border-b text-right">
                    <input
                      type="number"
                      value={r.customers}
                      onChange={(e) => update(i, "customers", e.target.value)}
                      className="w-full text-right border border-gray-300 rounded-md px-2 py-1"
                    />
                  </td>
                  <td className="p-2 border-b text-right">
                    {isFinite(cac) ? currency(cac) : "–"}
                  </td>
                  <td className="p-2 border-b text-center">
                    <button
                      onClick={() => removeRow(i)}
                      className="text-xs text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr className="font-semibold bg-gray-50">
              <td className="p-2 border-t">Total</td>
              <td className="p-2 border-t text-right">
                {currency(totals.marketing)}
              </td>
              <td className="p-2 border-t text-right">
                {currency(totals.sales)}
              </td>
              <td className="p-2 border-t text-right">
                {currency(totals.other)}
              </td>
              <td className="p-2 border-t text-right">
                {totals.customers.toLocaleString()}
              </td>
              <td className="p-2 border-t text-right">
                {isFinite(overallCAC) ? currency(overallCAC) : "–"}
              </td>
              <td className="p-2 border-t" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PaybackCalculator: React.FC = () => {
  const [cac, setCac] = useState<number>(200);
  const [aov, setAov] = useState<number>(85);
  const [margin, setMargin] = useState<number>(60);
  const [frequency, setFrequency] = useState<number>(4);

  const monthlyGrossProfit = aov * (margin / 100) * (frequency / 12);
  const months = monthlyGrossProfit > 0 ? cac / monthlyGrossProfit : NaN;

  return (
    <div className="rounded-xl border border-gray-200 p-4 md:p-5 bg-white text-black">
      <h3 className="text-xl font-semibold mb-3">CAC Payback Period</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <div>
          <label className="text-sm text-gray-700">
            Customer Acquisition Cost (CAC)
          </label>
          <input
            type="number"
            value={cac}
            onChange={(e) => setCac(Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            min={0}
          />
        </div>
        <div>
          <label className="text-sm text-gray-700">
            Average Order Value (AOV)
          </label>
          <input
            type="number"
            value={aov}
            onChange={(e) => setAov(Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            min={0}
          />
        </div>
        <div>
          <label className="text-sm text-gray-700">Gross Margin %</label>
          <input
            type="number"
            value={margin}
            onChange={(e) => setMargin(Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            min={0}
            max={100}
          />
        </div>
        <div>
          <label className="text-sm text-gray-700">
            Purchase Frequency (annual)
          </label>
          <input
            type="number"
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            min={0}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-gray-900">
        <div className="text-sm">
          Monthly Gross Profit / Customer:{" "}
          <strong>
            {isFinite(monthlyGrossProfit)
              ? `$${fixed2(monthlyGrossProfit)}`
              : "–"}
          </strong>
        </div>
        <div className="ml-auto text-lg font-semibold">
          Payback Period = {isFinite(months) ? `${fixed2(months)} months` : "–"}
        </div>
      </div>
    </div>
  );
};

const CACCalculator: React.FC = () => {
  return (
    <div className="space-y-6">
      <BasicCACCalculator />
      <ChannelCACCalculator />
      <PaybackCalculator />
    </div>
  );
};

export default CACCalculator;
