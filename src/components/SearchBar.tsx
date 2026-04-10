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
    <div
      className="rounded-2xl border p-4"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <label
        className="mb-2 block text-sm font-medium"
        style={{ color: 'var(--color-text)' }}
      >
        Buscar
      </label>

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border px-3 py-2 outline-none transition"
        style={{
          backgroundColor: 'var(--color-bg)',
          borderColor: 'var(--color-border)',
          color: 'var(--color-text)',
        }}
      />
    </div>
  )
}

export default SearchBar