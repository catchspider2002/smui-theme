<script>
  import IconButton, { Icon } from "@smui/icon-button";

  export let variant; // solid || outline
  export let border; // top || left
  export let color = "purple";
  export let iconAlignment = "center"; // center || top

  let borderClass, variantClass;
  var theme = localStorage.getItem("theme") || "light";

  let defaultBgColor = "bg-" + color + "-" + (theme == "dark" ? "800" : "200");
  let solidBgColor = "bg-" + color + "-" + (theme == "dark" ? "400" : "700");
  let solidTextColor = theme == "dark" ? "text-black" : "text-white";
  let outlineBgColor = "bg-" + color + "-" + (theme == "dark" ? "900" : "100");
  let outlineBorderColor =
    "border-" + color + "-" + (theme == "dark" ? "600" : "500");
  let outlineTextColor =
    "text-" + color + "-" + (theme == "dark" ? "200" : "800");

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
    borderClass =
      variant == "solid"
        ? "border-" + color + "-500"
        : "border-" + color + "-700";
    borderClass =
      variant == "solid"
        ? "border-" + color + "-600"
        : "border-" + color + "-400";

    if (border == "top") borderClass += " border-t-4";
    else if (border == "left") borderClass += " border-l-4";
  }
</script>

<style>

</style>

<div
  class="{variantClass}
  {borderClass} pr-4 py-2 rounded relative flex items-center"
  role="alert">
  <Icon class="material-icons pl-4 py-1">check_circle</Icon>
  <div class="px-4">
    <div class="pt-1 font-bold">Alert Title</div>
    <div class="pt-1">Something seriously bad happened.</div>
  </div>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <IconButton class="material-icons" title="Dismiss">close</IconButton>

  </span>
</div>
