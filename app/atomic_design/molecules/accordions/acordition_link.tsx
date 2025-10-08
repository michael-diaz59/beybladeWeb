import {
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <Accordion slotProps={{ heading: { component: "h4" } }}>
      <AccordionSummary
        expandIcon={
             <ExpandMoreIcon sx={{ color: "primary.main" }} />
        }
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>
        {links.map((item) => (
          <ListItem key={item.href} sx={{ pl: 4 }}>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{
                border: "2px solid", //  borde
                borderColor: "primary.main", //  color de borde igual al texto
                borderRadius: 1, //  esquinas redondeadas
                px: 1, //  padding horizontal
                py: 0.5, //  padding vertical
                display: "block", // evita que se expanda a todo el ancho
                 width: "100%",      //  asegura que se expanda al 100%
                textAlign: "center" 
              }}
            >
              <ListItemText primary={item.label} />
            </Link>
          </ListItem>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
