<script>
  import IconButton, { Icon } from "@smui/icon-button";

  export let variant; // solid || outline
  export let border; // top || left
  export let color;
  export let iconAlignment = "center"; // center || top

  let borderClass, variantClass;

  switch (variant) {
    case "solid":
      variantClass = "bg-green-600 text-white";
      break;
    case "outline":
      variantClass = "bg-green-100 border border-green-400 text-green-700";
      break;
    default:
      variantClass = "bg-green-200";
      break;
  }

  if (border) {
    borderClass = variant == "solid" ? "border-green-400" : "border-green-600";

    if (border == "top") borderClass += " border-t-4";
    else if (border == "left") borderClass += " border-l-4";
  }
</script>

<div class="{variantClass} {borderClass} pr-4 py-2 rounded relative flex items-center" role="alert">
  <Icon class="material-icons pl-4 py-1">check_circle</Icon>
  <div class="px-4">
    <div class="pt-1 font-bold">Alert Title</div>
    <div class="pt-1">Something seriously bad happened.</div>
  </div>
	<span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <IconButton class="material-icons" title="Dismiss">close</IconButton>

	</span>
</div>