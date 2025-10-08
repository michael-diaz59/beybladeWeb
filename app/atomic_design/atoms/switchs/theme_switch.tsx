import { Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ThemeSwitchProps {
  checked: boolean;
  onChange: () => void;
}

export default function ThemeSwitch({ checked, onChange }: ThemeSwitchProps) {
  const theme = useTheme();

  return (
    <Switch
      checked={checked}
      onChange={onChange}
      aria-label="Cambiar tema claro/oscuro" 
      sx={{
        "& .MuiSwitch-switchBase": {
          color: theme.palette.primary.contrastText, // color del thumb
        },
        "& .MuiSwitch-switchBase.Mui-checked": {
          color: theme.palette.primary.contrastText, // thumb activo
        },
        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
          backgroundColor: theme.palette.primary.contrastText, // track activo
          opacity: 0.7,
        },
        "& .MuiSwitch-track": {
          backgroundColor: theme.palette.primary.contrastText, // track inactivo
          opacity: 0.3,
        },
      }}
    />
  );
}