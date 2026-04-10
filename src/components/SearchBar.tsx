interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

function SearchBar({
  value,
  onChange,
  placeholder = 'Buscar...',
}: SearchBarProps) {
  return (
    <div className="rounded-xl border border-stone-800 bg-stone-900 p-4">
      <label className="mb-2 block text-sm font-medium text-stone-200">
        Buscar
      </label>

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-stone-700 bg-stone-950 px-3 py-2 text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-emerald-500"
      />
    </div>
  )
}

export default SearchBar