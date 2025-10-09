import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";



export default function itemLink({ link }: { link: LinkItem}) {
    return(
        <ListItem  disablePadding>
          <Link
            href={link.href}
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
                bgcolor: "action.focus", // usa color principal
              },
            }}
          >
            <ListItemText primary={link.label} />
          </Link>
        </ListItem>
    )
}