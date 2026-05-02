import { LayoutDashboard, Users, Kanban, Building2 } from 'lucide-react'

const NAV = [
  { id: 'dashboard', label: 'Dashboard',  icon: LayoutDashboard },
  { id: 'leads',     label: 'Leads',      icon: Users },
  { id: 'pipeline',  label: 'Pipeline',   icon: Kanban },
]

export default function Sidebar({ view, setView, newCount }) {
  return (
    <aside className="w-60 flex-shrink-0 bg-gray-900 border-r border-gray-800 flex flex-col h-screen">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
            <Building2 size={18} className="text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-sm tracking-wider">WEKASAS</div>
            <div className="text-gray-500 text-xs">CRM Leads</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setView(id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              view === id
                ? 'bg-brand-500/20 text-brand-500 border border-brand-500/30'
                : 'text-gray-400 hover:text-gray-100 hover:bg-gray-800'
            }`}
          >
            <Icon size={18} />
            <span>{label}</span>
            {id === 'leads' && newCount > 0 && (
              <span className="ml-auto bg-brand-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {newCount}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-800">
        <div className="text-xs text-gray-600">HEAVENWHISPER LDA</div>
        <div className="text-xs text-gray-700">Â© 2026 Grupo WE</div>
      </div>
    </aside>
  )
}
