import axios from "axios"
import { useEffect, useState } from "react";

export default function App() {

  interface languageType {
    language: string,
    name: string
  }

  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [sourceLanguage, setSourceLanguage] = useState<string>("");
  const [targetLanguage, setTargetLanguage] = useState<string>("");
  const [allLanguages, setAllLanguages] = useState<languageType[]>([]);

  useEffect(() => { getLanguages() }, []);

  async function getLanguages() {
    const res = await axios.get("https://deep-translate1.p.rapidapi.com/language/translate/v2/languages", {
      headers: {
        'x-rapidapi-key': 'a28a7bdc03msh8be974ba5c60b76p134761jsn404f05fcc0db',
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
        'Content-Type': 'application/json'
      }
    });

    setAllLanguages(res.data.languages);
    console.log(res.data.languages);
  }

  async function translate() {
    const res = await axios.post("https://deep-translate1.p.rapidapi.com/language/translate/v2", {
      q: input,
      source: sourceLanguage,
      target: targetLanguage
    },
      {
        headers: {
          'x-rapidapi-key': 'a28a7bdc03msh8be974ba5c60b76p134761jsn404f05fcc0db',
          'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
          'Content-Type': 'application/json'
        }
      }
    );

    setOutput(res.data.data.translations.translatedText[0]);
  }

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-slate-900 font-sans selection:bg-indigo-100 p-6 md:p-12 relative overflow-hidden">

      {/* Modern Mesh Gradient Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <div className="h-4 w-4 border-2 border-white rounded-sm rotate-45" />
            </div>
            <span className="font-bold text-xl tracking-tight">Lumos.ai</span>
          </div>
          <div className="flex gap-2">
            <div className="px-4 py-1.5 bg-white/80 border border-slate-200 rounded-full text-xs font-medium shadow-sm">
              Enterprise Grade
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 relative">

          {/* Source Panel */}
          <div className="bg-white/70 backdrop-blur-xl border border-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all focus-within:shadow-[0_20px_50px_rgba(79,70,229,0.1)]">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <select
                className="bg-transparent font-semibold text-sm text-slate-500 outline-none cursor-pointer hover:text-indigo-600 transition-colors"
                onChange={(e) => setSourceLanguage(e.target.value)}
              >
                <option value="">Detect Language</option>
                {allLanguages.map((lang, idx) => (
                  <option key={idx} value={lang.language}>{lang.name}</option>
                ))}
              </select>
              <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-slate-200" />
                <div className="h-2 w-2 rounded-full bg-slate-200" />
              </div>
            </div>

            <textarea
              className="w-full h-48 p-8 bg-transparent resize-none outline-none text-2xl font-light text-slate-800 placeholder:text-slate-300"
              placeholder="Enter text to translate..."
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          {/* Floating Action Button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <button
              onClick={() => translate()}
              className="h-16 w-16 bg-white border border-slate-200 rounded-2xl shadow-xl flex items-center justify-center group hover:scale-110 active:scale-95 transition-all"
            >
              <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:rotate-180 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Target Panel */}
          <div className="bg-slate-900/5 backdrop-blur-sm border border-slate-200 rounded-3xl p-1">
            <div className="bg-white/40 rounded-[22px] overflow-hidden">
              <div className="p-4 border-b border-white/20 flex items-center justify-between">
                <select
                  className="bg-transparent font-semibold text-sm text-slate-500 outline-none cursor-pointer"
                  onChange={(e) => setTargetLanguage(e.target.value)}
                >
                  <option value="">Choose Target</option>
                  {allLanguages.map((lang, idx) => (
                    <option key={idx} value={lang.language}>{lang.name}</option>
                  ))}
                </select>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">Result</span>
              </div>

              <div className="p-8 min-h-[192px]">
                {output ? (
                  <p className="text-2xl font-light text-slate-800 animate-in fade-in duration-700">
                    {output}
                  </p>
                ) : (
                  <p className="text-2xl font-light text-slate-300">Your translation will appear here...</p>
                )}
              </div>

              <div className="p-4 bg-slate-50/50 flex justify-end gap-3">
                <button className="text-slate-400 hover:text-indigo-600 transition-colors p-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="text-slate-400 hover:text-indigo-600 transition-colors p-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Modern Feature Footer */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Neural Sync", desc: "Real-time context awareness" },
            { title: "Privacy First", desc: "End-to-end data encryption" },
            { title: "Smart Save", desc: "Auto-history for all users" }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-center">
              <div className="h-1 bg-indigo-600 w-4 rounded-full" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
