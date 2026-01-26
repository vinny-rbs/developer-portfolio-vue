<script setup></script>

<template>
    <button class="
      flex w-fit h-fit gap-[clamp(0.5em,2vw,1em)] p-2 rounded-[2em] border-3
      border-(--color-primary) dark:border-(--color-primary)
      shadow-[0px_3px_0_var(--color-primary-shadow)]
      transition-all duration-200 ease-in-out
      hover:-translate-y-1
      hover:shadow-[0px_4px_0_var(--color-primary-shadow)]
      active:translate-y-0.5
      active:shadow-[0px_0px_0_var(--color-primary-shadow)]
    ">
        <slot name="icon" />
        <slot name="content" />
    </button>
</template>
