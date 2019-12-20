<script>
  import IconButton, { Icon } from "@smui/icon-button";

  export let variant; // solid || outline
  export let border; // top || left
  export let color = "green";
  export let iconAlignment = "center"; // center || top
  export let title;

  let borderClass, variantClass;
  var theme = localStorage.getItem("theme") || "light";

  let defaultBgColor = theme == "dark" ? "bg-green-800" : "bg-green-200";
  let solidBgColor = theme == "dark" ? "bg-green-400" : "bg-green-700";
  let solidTextColor = theme == "dark" ? "text-black" : "text-white";
  let outlineBgColor = theme == "dark" ? "bg-green-900" : "bg-green-100";
  let outlineBorderColor =
    theme == "dark" ? "border-green-600" : "border-green-400";
  let outlineBorderColor2 =
    theme == "dark" ? "border-green-400" : "border-green-600";
  let outlineTextColor = theme == "dark" ? "text-green-200" : "text-green-800";

  switch (variant) {
    case "solid":
      variantClass = solidBgColor + " " + solidTextColor;
      break;
    case "outline":
      variantClass =
        outlineBgColor +
        " border " +
        outlineBorderColor +
        " " +
        outlineTextColor;
      break;
    default:
      variantClass = defaultBgColor;
      break;
  }

  if (border) {
    borderClass = variant == "solid" ? outlineBorderColor : outlineBorderColor2;

    if (border == "top") borderClass += " border-t-4";
    else if (border == "left") borderClass += " border-l-4";
  }
</script>

<style>
  * :global(.outlineBgColor) {
  }
</style>

<div
  class="{variantClass}
  {borderClass} py-2 rounded relative flex items-center"
  role="alert">
  <slot />
  <div class="px-4 flex-1-0-auto">
    {#if title}
      <div class="py-1 font-bold">{title}</div>
    {/if}
    <div class="py-1">
      <slot name="description" />
    </div>
  </div>
  <div class="pr-4 py-1">
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </div>
  <!-- <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </span> -->
</div>
