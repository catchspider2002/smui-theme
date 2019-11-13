<script>
  import Icon from "./Icon.svelte";

   export let header,
    dotSize = "sm", // "xs" | "sm" | "md" | "lg" | "xl"
    title,
    subtitle,
    text,
    position = "right",
    border,
    icon="br",
    classes;
  if (position === "left") {
    classes = "timeline__content--flipped";
  }

  let dotClass, iconSize;
  // dotSize = "md";
  if (dotSize == "xs") {
    // 8px
    if (border) dotClass = "p-0.75 border";
    else dotClass = "p-1";
    iconSize = "0";
    dotClass = dotClass + " mt-7";
  } else if (dotSize == "md") {
    // 24px
    if (border) {
      dotClass = icon ? "p-1.25 border-3" : "p-2.25 border-3";
      iconSize = "2";
    } else {
      dotClass = icon ? "p-1.5" : "p-3";
      iconSize = "3";
    }
    dotClass = dotClass + " mt-5";
  } else if (dotSize == "lg") {
    // 32px
    if (border) {
      dotClass = icon ? "p-1.5 border-4" : "p-3 border-4";
      iconSize = "3";
    } else {
      dotClass = icon ? "p-2" : "p-4";
      iconSize = "4";
    }
    dotClass = dotClass + " mt-4";
  } else if (dotSize == "xl") {
    // 40px
    if (border) {
      dotClass = icon ? "p-1.75 border-5" : "p-3.75 border-5";
      iconSize = "4";
    } else {
      dotClass = icon ? "p-2.5" : "p-5";
      iconSize = "5";
    }
    dotClass = dotClass + " mt-3";
  } else {
    // 16px
    if (border) {
      dotClass = icon ? "p-1 border-2" : "p-1.5 border-2";
      iconSize = "1";
    } else {
      dotClass = icon ? "p-1" : "p-2";
      iconSize = "2";
    }
    dotClass = dotClass + " mt-6";
  }
</script>

<style>


.timeline__entry:after {
    content: "";
    display: table;
    clear: both;
  }

  .timeline__id {
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .timeline__content:before {
    content: "";
    position: absolute;
    display: block;
    top: 1em;
    left: -1em;
    border-top: 1em solid transparent;
    border-bottom: 1em solid transparent;
    border-right: 1em solid white;
  }
  @media screen and (min-width: 640px) {
    .timeline__id {
      margin-left: 50%;
    }
    .timeline__content {
      width: calc(50% - 4em);
    }
    .timeline__content:before {
      left: auto;
      right: -1em;
      border-left: 1em solid white;
      border-right: none;
    }
    .timeline__content--flipped {
      float: right;
    }
    .timeline__content--flipped:before {
      left: -1em;
      right: auto;
      border-left: none;
      border-right: 1em solid white;
    }
  }

  .mt-7 {
    margin-top: 1.75rem;
  }
  .p-0\.75 {
    padding: 0.1875rem;
  }
  .p-1\.25 {
    padding: 0.3125rem;
  }
  .p-1\.5 {
    padding: 0.375rem;
  }
  .p-1\.75 {
    padding: 0.4375rem;
  }
  .p-2\.25 {
    padding: 0.5625rem;
  }
  .p-2\.5 {
    padding: 0.625rem;
  }
  .p-2\.75 {
    padding: 0.6875rem;
  }
  .p-3\.75 {
    padding: 0.9375rem;
  }
  .p-4\.75 {
    padding: 1.1875rem;
  }
  .mt-9 {
    margin-top: 2.25rem;
  }
  .border-3 {
    border-width: 3px;
  }
  .border-5 {
    border-width: 5px;
  }
</style>

<li class="timeline__entry relative mb-16 sm:mb-0 text-white">
  <!-- <span class="timeline__id absolute bg-purple-400 {dotClass} mt-6 ml-8 rounded-full" /> -->
  <!-- <div class="timeline__id absolute bg-purple-400 p-1 mt-6 ml-8 rounded-full">
    <Icon margin="mx-0" size={iconSize} />
  </div> -->
  <div class="timeline__id absolute bg-red-400 border-white {dotClass} shadow-md ml-8 rounded-full" >
  {#if icon}
  <Icon margin="mx-0" size={iconSize} />
  {/if}
  </div>

  <div
    class="timeline__content flex flex-col relative block bg-white p-4 ml-20 shadow-md
    sm:ml-0 {classes}">
    <span class="text-xl font-semibold text-center text-red-500 mb-2">
      {header}
    </span>
    <span class="text-base font-bold text-center text-black mb-2">{title}</span>
    <span class="text-sm text-center text-gray-500 mb-2">{subtitle}</span>
    <span class="text-gray-700">{text}</span>
  </div>
</li>