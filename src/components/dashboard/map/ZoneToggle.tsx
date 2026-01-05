import { Switch } from "../../ui/switch";

export function ZoneToggle({
  label,
  color,
  checked,
  onChange,
}: {
  label: string;
  color: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-muted p-4">
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${color}`} />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} className="bg-blue-600" />
    </div>
  );
}
