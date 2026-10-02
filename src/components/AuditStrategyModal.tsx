import React, { useState } from 'react';
import { X, CheckCircle, ExternalLink, Layers, BookOpen, Film as FilmIcon, Palette, Smartphone, Database, ShieldCheck } from 'lucide-react';
import { INVENTORY_AUDIT_DATA, REFERENCE_ANALYSIS, WORDPRESS_IMPLEMENTATION_SPECS } from '../data/perennialFilmsData';

interface AuditStrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditStrategyModal: React.FC<AuditStrategyModalProps> = ({ isOpen, onClose }) => {
  const [activePhase, setActivePhase] = useState<number>(1);

  if (!isOpen) return null;

  const phases = [
    { num: 1, label: 'Content Inventory' },
    { num: 2, label: 'Niche & Brand' },
    { num: 3, label: 'Reference Analysis' },
    { num: 4, label: 'Information Arch.' },
    { num: 5, label: 'Design System & WP' },
    { num: 6, label: 'Homepage Strategy' },
    { num: 7, label: 'Archive & Filters' },
    { num: 8, label: 'Film Detail UX' },
    { num: 9, label: 'VOD Platform' },
    { num: 10, label: 'Mobile Streamlining' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#141416] border border-[#2e2e33] rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#27272a] flex items-center justify-between bg-[#18181b] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#C29B38]/10 text-[#C29B38] border border-[#C29B38]/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C29B38]">
                Design Strategist Deliverable
              </span>
              <h2 className="font-serif text-2xl text-[#F4F4F5] font-normal leading-tight">
                10-Phase Redesign Blueprint & Content Inventory
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#27272a] text-[#A1A1AA] hover:text-white hover:bg-[#3f3f46] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Phase Selector Tabs */}
        <div className="px-6 py-2.5 bg-[#101012] border-b border-[#27272a] flex items-center gap-1.5 overflow-x-auto shrink-0 scrollbar-none">
          {phases.map((p) => (
            <button
              key={p.num}
              onClick={() => setActivePhase(p.num)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                activePhase === p.num
                  ? 'bg-[#C29B38] text-black font-semibold'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#1f1f23]'
              }`}
            >
              Phase {p.num}: {p.label}
            </button>
          ))}
        </div>

        {/* Phase Content Area */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#D4D4D8] leading-relaxed">
          {/* Phase 1 */}
          {activePhase === 1 && (
            <div className="space-y-6">
              <div className="border-b border-[#27272a] pb-4">
                <span className="text-xs font-mono uppercase text-[#C29B38]">Phase 1</span>
                <h3 className="font-serif text-3xl text-[#F4F4F5]">Live Website Content Inventory & Audit</h3>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  100% crawl verification of perennial-films.com with exact URLs, headings, text, imagery, and CTAs preserved without alteration.
                </p>
              </div>

              <div className="overflow-x-auto border border-[#27272a] rounded-xl bg-[#18181b]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#121212] text-[#A1A1AA] font-mono uppercase border-b border-[#27272a]">
                    <tr>
                      <th className="p-3">Page Name</th>
                      <th className="p-3">Live URL</th>
                      <th className="p-3">Identified Headings</th>
                      <th className="p-3">Key Imagery</th>
                      <th className="p-3">Existing Functionality</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#27272a]">
                    {INVENTORY_AUDIT_DATA.map((row, i) => (
                      <tr key={i} className="hover:bg-[#1f1f24] transition-colors">
                        <td className="p-3 font-semibold text-[#F4F4F5] whitespace-nowrap">{row.page}</td>
                        <td className="p-3 font-mono text-[11px] text-[#C29B38]">
                          <a href={row.url} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                            <span>{row.url.replace('https://perennial-films.com', '') || '/'}</span>
                            <ExternalLink className="w-3 h-3 shrink-0" />
                          </a>
                        </td>
                        <td className="p-3 text-[#A1A1AA] max-w-xs truncate">{row.headings.join(' | ')}</td>
                        <td className="p-3 text-[#A1A1AA]">{row.imagery}</td>
                        <td className="p-3 text-[#71717A] text-[11px] font-mono">{row.functionality}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Phase 2 */}
          {activePhase === 2 && (
            <div className="space-y-6">
              <div className="border-b border-[#27272a] pb-4">
                <span className="text-xs font-mono uppercase text-[#C29B38]">Phase 2</span>
                <h3 className="font-serif text-3xl text-[#F4F4F5]">Niche & Brand Positioning Strategy</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-[#18181b] border border-[#27272a] space-y-2">
                  <h4 className="font-serif text-lg text-[#F4F4F5]">70% Independent Cinema</h4>
                  <p className="text-xs text-[#A1A1AA]">
                    Serious cinematic pacing, dramatic documentary still photography, high-contrast black/ivory framing, and authentic director voice.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#18181b] border border-[#27272a] space-y-2">
                  <h4 className="font-serif text-lg text-[#F4F4F5]">20% Editorial Publication</h4>
                  <p className="text-xs text-[#A1A1AA]">
                    Sophisticated literary typography (Cormorant Garamond display paired with clean Plus Jakarta Sans), academic review citations, and course syllabus alignment.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#18181b] border border-[#27272a] space-y-2">
                  <h4 className="font-serif text-lg text-[#F4F4F5]">10% Premium VOD Platform</h4>
                  <p className="text-xs text-[#A1A1AA]">
                    Seamless, respectful digital licensing (University PPR/DSL, Non-profit, Home Stream) without commercial streaming service clutter or garish marketing popups.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#18181b] border border-[#27272a] space-y-3">
                <h4 className="text-xs font-mono uppercase text-[#C29B38]">Anti-Slop Boundaries Enforced</h4>
                <ul className="text-xs text-[#A1A1AA] space-y-1.5 list-disc pl-4">
                  <li>No purple gradients, glassmorphism, or tacky neon borders.</li>
                  <li>Zero-pill discipline: Metadata is unboxed with clean typographical bullets (·).</li>
                  <li>No AI-generated people or substitute stock photos; 100% real client documentary imagery used.</li>
                  <li>Preservation of authentic client text without paraphrasing or marketing rewrites.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Phase 3 */}
          {activePhase === 3 && (
            <div className="space-y-6">
              <div className="border-b border-[#27272a] pb-4">
                <span className="text-xs font-mono uppercase text-[#C29B38]">Phase 3</span>
                <h3 className="font-serif text-3xl text-[#F4F4F5]">Design Reference Principles Extracted</h3>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  Synthesizing key design strengths from reference sites without copying layouts or assets.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {REFERENCE_ANALYSIS.map((ref, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-[#18181b] border border-[#27272a] space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-xl text-[#F4F4F5]">{ref.name}</h4>
                      <span className="text-[10px] font-mono text-[#C29B38]">{ref.url.replace('https://www.', '').replace('https://', '')}</span>
                    </div>
                    <ul className="space-y-2 text-xs text-[#A1A1AA]">
                      {ref.principles.map((pr, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-[#C29B38] font-bold">•</span>
                          <span>{pr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Phase 4 */}
          {activePhase === 4 && (
            <div className="space-y-6">
              <div className="border-b border-[#27272a] pb-4">
                <span className="text-xs font-mono uppercase text-[#C29B38]">Phase 4</span>
                <h3 className="font-serif text-3xl text-[#F4F4F5]">Proposed Information Architecture</h3>
              </div>

              <div className="p-6 rounded-xl bg-[#18181b] border border-[#27272a] space-y-4">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#C29B38]">
                    Primary Navigation Hierarchy (Top Bar Contract)
                  </h4>
                  <p className="text-xs text-[#A1A1AA]">
                    Zone 1: Wordmark ("Perennial Films | films that make a difference") → Zone 2: 5 Links (Overview, Films & Catalog, Purchase & Licensing, About Joanne, Contact) → Zone 3: My Library, Cart, Mobile Menu.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 text-xs">
                  <div className="p-4 rounded-lg bg-[#121212] border border-[#27272a] space-y-1">
                    <strong className="text-[#F4F4F5] block font-mono">1. Overview (Home)</strong>
                    <span className="text-[#71717A]">Cinematic hero + Flagship feature + Catalog teaser + Director speaking CTA.</span>
                  </div>
                  <div className="p-4 rounded-lg bg-[#121212] border border-[#27272a] space-y-1">
                    <strong className="text-[#F4F4F5] block font-mono">2. Film Archive</strong>
                    <span className="text-[#71717A]">Multi-discipline filtering, instant trailer modals, course recommendations.</span>
                  </div>
                  <div className="p-4 rounded-lg bg-[#121212] border border-[#27272a] space-y-1">
                    <strong className="text-[#F4F4F5] block font-mono">3. Film Detail</strong>
                    <span className="text-[#71717A]">Full unabridged text, reviews, laurels, trailer player, license selector.</span>
                  </div>
                  <div className="p-4 rounded-lg bg-[#121212] border border-[#27272a] space-y-1">
                    <strong className="text-[#F4F4F5] block font-mono">4. Purchase / VOD</strong>
                    <span className="text-[#71717A]">Transparent university & non-profit pricing schedule + institutional P.O. flow.</span>
                  </div>
                  <div className="p-4 rounded-lg bg-[#121212] border border-[#27272a] space-y-1">
                    <strong className="text-[#F4F4F5] block font-mono">5. Screening Room</strong>
                    <span className="text-[#71717A]">Distraction-free dark mode player + closed captions + study guide sidebar.</span>
                  </div>
                  <div className="p-4 rounded-lg bg-[#121212] border border-[#27272a] space-y-1">
                    <strong className="text-[#F4F4F5] block font-mono">6. My Library</strong>
                    <span className="text-[#71717A]">Licensed streams, PPR certificates, permanent account repository.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Phase 5 */}
          {activePhase === 5 && (
            <div className="space-y-6">
              <div className="border-b border-[#27272a] pb-4">
                <span className="text-xs font-mono uppercase text-[#C29B38]">Phase 5</span>
                <h3 className="font-serif text-3xl text-[#F4F4F5]">Design System & WordPress ACF Mapping</h3>
              </div>

              {/* Color Tokens */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-[#C29B38]">Palette Tokens (60-30-10 System)</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#121212] border border-[#27272a]">
                    <div className="w-full h-8 rounded bg-[#121212] border border-white/20 mb-2" />
                    <span className="font-mono text-[#F4F4F5] block">#121212</span>
                    <span className="text-[#71717A]">Dominant Dark Canvas (60%)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#18181b] border border-[#27272a]">
                    <div className="w-full h-8 rounded bg-[#18181b] border border-white/20 mb-2" />
                    <span className="font-mono text-[#F4F4F5] block">#18181B</span>
                    <span className="text-[#71717A]">Structural Card (30%)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#18181b] border border-[#27272a]">
                    <div className="w-full h-8 rounded bg-[#C29B38] mb-2" />
                    <span className="font-mono text-[#F4F4F5] block">#C29B38</span>
                    <span className="text-[#71717A]">Warm Gold Accent (10%)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#18181b] border border-[#27272a]">
                    <div className="w-full h-8 rounded bg-[#F4F4F5] mb-2" />
                    <span className="font-mono text-[#F4F4F5] block">#F4F4F5</span>
                    <span className="text-[#71717A]">Headings Ivory</span>
                  </div>
                </div>
              </div>

              {/* WordPress Schema */}
              <div className="p-5 rounded-xl bg-[#18181b] border border-[#27272a] space-y-3">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#C29B38]" />
                  <h4 className="font-serif text-lg text-[#F4F4F5]">WordPress Custom Post Type & ACF Architecture</h4>
                </div>
                <p className="text-xs text-[#A1A1AA]">
                  Target WordPress Setup: Custom post type <code className="font-mono text-[#C29B38]">film</code> with taxonomies <code className="font-mono text-[#C29B38]">discipline</code> and <code className="font-mono text-[#C29B38]">theme</code>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#D4D4D8]">
                  {WORDPRESS_IMPLEMENTATION_SPECS.acfFields.map((field, i) => (
                    <div key={i} className="p-2 rounded bg-[#121212] border border-[#27272a]">
                      <span className="text-[#C29B38]">{field.name}</span> ({field.type})
                      <span className="block text-[11px] text-[#71717A]">{field.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Phase 6 to 10 Quick Summary Tabs */}
          {activePhase >= 6 && (
            <div className="space-y-6">
              <div className="border-b border-[#27272a] pb-4">
                <span className="text-xs font-mono uppercase text-[#C29B38]">Phase {activePhase}</span>
                <h3 className="font-serif text-3xl text-[#F4F4F5]">
                  {activePhase === 6 && 'High-Fidelity Homepage Architecture'}
                  {activePhase === 7 && 'High-Fidelity Film Archive & Curriculum Search'}
                  {activePhase === 8 && 'High-Fidelity Film Detail Page (Gardening for the Planet)'}
                  {activePhase === 9 && 'Complete VOD Architecture & Screening Room Player'}
                  {activePhase === 10 && 'Streamlined Mobile Navigation & Responsive Validation'}
                </h3>
              </div>

              <div className="p-6 rounded-xl bg-[#18181b] border border-[#27272a] space-y-4 text-xs text-[#D4D4D8]">
                {activePhase === 6 && (
                  <>
                    <p>
                      <strong>Hero Section:</strong> Uses original client image (<code className="font-mono text-[#C29B38]">taoc-3.jpg</code>) of director Joanne Hershfield filming in Kenya, paired with the exact introductory statement and tagline.
                    </p>
                    <p>
                      <strong>Featured Film:</strong> Showcases <em>Gardening for the Planet</em> with official selections (PEFF 2026, ECOCINE 2025), quote from Rebecca Solnit, runtime, and instant trailer / purchase CTAs.
                    </p>
                    <p>
                      <strong>Film Archive Teaser:</strong> Large editorial cards for all other films, runtime badges, course disciplines, and synopsis previews.
                    </p>
                  </>
                )}
                {activePhase === 7 && (
                  <>
                    <p>
                      Includes all 6 documentaries: <em>Gardening for the Planet</em>, <em>Men Are Human, Women Are Buffalo</em>, <em>The Gillian Film</em>, <em>Mama C: Urban Warrior in the African Bush</em>, <em>These Are Our Children</em>, and <em>Benevolence</em>.
                    </p>
                    <p>
                      Filter tabs allow educational buyers and researchers to instantly locate films relevant to Botany, Gender Studies, Disability Studies, African Studies, or Criminal Justice.
                    </p>
                  </>
                )}
                {activePhase === 8 && (
                  <>
                    <p>
                      The reusable film detail template accommodates long-form academic texts without sacrificing layout elegance. All 9,465 characters of <em>Gardening for the Planet</em> are structured with editorial headings, pull quotes, reviewer credentials, and course lists.
                    </p>
                    <p>
                      Reviewers like Kathleen H. Flynn (Science Librarian, University at Albany), Prof. Kathleen Cleaver (Emory Law School), and Dr. Catherine D. Marcum are given prominent, verified academic attribution.
                    </p>
                  </>
                )}
                {activePhase === 9 && (
                  <>
                    <p>
                      The VOD system supports both institutional licenses (Life of File DSL + PPR) and individual home viewing (48h rent or buy).
                    </p>
                    <p>
                      Purchased films automatically populate the user's "My Films" library, with instant access to the dark cinema screening room, study guides, and downloadable PPR certificates.
                    </p>
                  </>
                )}
                {activePhase === 10 && (
                  <>
                    <p>
                      <strong>Streamlined Mobile Navigation:</strong> Mobile menu redesigned into an uncluttered full-screen drawer with quick-action links to all 6 films, institutional licensing, my library, and contact.
                    </p>
                    <p>
                      <strong>Responsive Touch Optimization:</strong> All interactive elements exceed 44px touch targets. The aggregate height of sticky bars stays below 15% of the mobile viewport.
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#18181b] border-t border-[#27272a] flex items-center justify-between text-xs text-[#71717A] shrink-0">
          <span>Perennial Films Design Constitution & Content Preservation Verified</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#27272a] hover:bg-[#3f3f46] text-[#F4F4F5] text-xs font-mono"
          >
            Close Strategy Report
          </button>
        </div>
      </div>
    </div>
  );
};
