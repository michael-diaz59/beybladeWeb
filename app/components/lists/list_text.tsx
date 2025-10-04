import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";

type LinkItem = {
  label: string;
  href: string;
};

export default function ListText({ links }: { links: LinkItem[] }) {
  return (
    <List
      sx={{
        display: "grid",
        gridAutoFlow: "row",
        gridAutoColumns: "max-content",
      }}
    >
      {links.map((item, index) => (
        <ListItem key={index} disablePadding>
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              alignItems: "center",
              display: "flex",
              width: "100%",
              color: "inherit", // usa el color del theme (ej: contrastText en el footer)
              textDecoration: "none",
              p: 1,
              borderRadius: 1,
              "&:hover": {
                bgcolor: "action.focus", // 👈 usa color principal
              },
            }}
          >
            <ListItemText primary={item.label} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
