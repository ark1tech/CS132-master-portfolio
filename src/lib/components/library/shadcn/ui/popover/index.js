import { Popover as PopoverPrimitive } from "bits-ui";
import Content from "./popover-content.svelte";
import Item from "./popover-item.svelte";
import Arrow from "./popover-arrow.svelte";
const Root = PopoverPrimitive.Root;
const Trigger = PopoverPrimitive.Trigger;
const Close = PopoverPrimitive.Close;
export {
	Root,
	Content,
	Item,
	Trigger,
	Close,
	Arrow,
	//
	Root as Popover,
	Content as PopoverContent,
	Trigger as PopoverTrigger,
	Close as PopoverClose,
};
