import List from "@mui/material/List";
import ItemLink from "../../atoms/items/item_link"

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
         <ItemLink key={item.href ?? index} link={item} />
      ))}
     
    </List>
  );
}
