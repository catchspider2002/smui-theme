<script>
  import Icon from "./Icon.svelte";

  export let header,
    dotSize = "md", // "sm" | "md" | "lg" | "xl"
    title,
    subtitle,
    text,
    position = "right",
    classes;
  if (position === "left") {
    classes = "timeline__content--flipped";
  }

  let dotClass, iconSize;

  if (dotSize == "sm") {
    dotClass = "p-1";
    iconSize = "2";
  } else if (dotSize == "lg") {
    dotClass = "p-3";
    iconSize = "6";
  } else if (dotSize == "xl") {
    dotClass = "p-4";
    iconSize = "8";
  } else {
    dotClass = "p-2";
    iconSize = "4";
  }
</script>

<style>

</style>

<li class="timeline__entry relative mb-16 md:mb-0 text-white">
  <!-- <span class="timeline__id absolute bg-purple-400 {dotClass} mt-6 ml-8 rounded-full" /> -->
  <div class="timeline__id absolute bg-purple-400 p-1 mt-6 ml-8 rounded-full">
    <Icon margin="mx-0" size={iconSize} />
  </div>
  <!-- <span class="timeline__id absolute bg-purple-400 {dotClass} mt-6 ml-8 rounded-full" /> -->

  <div
    class="timeline__content flex flex-col relative block bg-white p-4 ml-20
    md:ml-0 {classes}">
    <span class="text-xl font-semibold text-center text-red-500 mb-2">
      {header}
    </span>
    <span class="text-base font-bold text-center text-black mb-2">{title}</span>
    <span class="text-sm text-center text-gray-500 mb-2">{subtitle}</span>
    <span class="text-gray-700">{text}</span>
  </div>
</li>
