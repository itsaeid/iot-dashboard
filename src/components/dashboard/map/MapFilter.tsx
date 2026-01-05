import { Switch } from "@/components/ui/switch"

type Props = {
  value: boolean
  label: string
  onChange: () => void
}

export function MapFilterItem({ value, label, onChange }: Props) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <span className="text-sm">{label}</span>
      <Switch checked={value} onCheckedChange={onChange} />
    </div>
  )
}
