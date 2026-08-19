"use client";

import { useState } from "react";

type Journalist = {
  name: string;
  publication: string;
  beat: string;
  relevance: number;
  reason: string;
};

export default function Home() {
  const [pitch, setPitch] = useState("");
  const [results, setResults] = useState<Journalist[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzePitch = async () => {
    if (!pitch.trim()) return;

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: pitch,
        }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();

      setResults(data.results || []);
    } catch (err) {
      setError(
        "Could not connect to PRPulse API. Make sure the FastAPI server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        
        {/* Header */}
        <header className="mb-16 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              <span className="text-white">PR</span>
              <span className="text-blue-500">Pulse</span>
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              AI-powered PR opportunity intelligence
            </p>
          </div>

          <div className="rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-300">
            AI Review Mode
          </div>
        </header>

        {/* Hero */}
        <section className="mb-10">
          <h2 className="max-w-3xl text-5xl font-bold leading-tight">
            Find the right journalist{" "}
            <span className="text-blue-500">before you send the pitch.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Describe your announcement and PRPulse ranks potential journalists,
            explains the match, and generates an outreach angle.
          </p>
        </section>

        {/* Pitch input */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
          <label className="mb-3 block text-sm font-medium text-slate-300">
            What are you pitching?
          </label>

          <textarea
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
            placeholder="Example: We are launching an AI platform that helps companies automate customer support using autonomous agents..."
            className="min-h-[180px] w-full resize-none rounded-xl border border-slate-700 bg-[#020617] p-5 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
          />

          <button
            onClick={analyzePitch}
            disabled={loading || !pitch.trim()}
            className="mt-5 rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze PR Opportunities"}
          </button>

          {error && (
            <p className="mt-4 text-sm text-red-400">
              {error}
            </p>
          )}
        </section>

        {/* Results */}
        {results.length > 0 && (
          <section className="mt-12">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-sm uppercase tracking-widest text-blue-500">
                  Analysis complete
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Recommended journalists
                </h3>
              </div>

              <span className="text-sm text-slate-500">
                {results.length} matches
              </span>
            </div>

            <div className="grid gap-5">
              {results.map((journalist, index) => (
                <article
                  key={journalist.name}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-500">
                          #{index + 1}
                        </span>

                        <h4 className="text-xl font-semibold">
                          {journalist.name}
                        </h4>
                      </div>

                      <p className="mt-1 text-blue-400">
                        {journalist.publication}
                      </p>

                      <p className="mt-3 text-sm text-slate-400">
                        Beat: {journalist.beat}
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-500">
                        {journalist.relevance}
                      </div>

                      <div className="text-xs uppercase tracking-wider text-slate-500">
                        Match
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-800 pt-5">
                    <p className="text-sm leading-7 text-slate-300">
                      <span className="font-semibold text-white">
                        Why this match:
                      </span>{" "}
                      {journalist.reason}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-20 border-t border-slate-800 pt-8 text-sm text-slate-500">
          PRPulse · AI-assisted PR research · Human-in-the-loop by design
        </footer>
      </div>
    </main>
  );
}