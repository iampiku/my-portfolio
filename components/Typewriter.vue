<template>
  <div class="relative inline-block">
    <span class="inline-block overflow-hidden whitespace-nowrap">{{ currentLetter }}</span>
    <span class="inline-block w-1 h-20 ml-1 bg-black animate-pulse" v-if="showCursor"></span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  delay: number,
  words: string[],
  typingSpeed: number,
}

/**
 * State
 */
const showCursor = useState<boolean>(() => true);
const currentIndex = useState<number>(() => 0);
const currentLetter = useState<string>(() => '');

/**
 * Props
 */
const props = withDefaults(defineProps<Props>(), {
  typingSpeed: 100,
  delay: 1000,
});

let typingInterval: any = null;

onMounted(() => {
  startTyping();
});

watch(currentIndex, () => {
  clearInterval(typingInterval);
  startTyping();
});

function startTyping(): void {
  const word = props.words[currentIndex.value];
  typingInterval = setInterval(() => {
    currentLetter.value = word.substring(0, currentLetter.value.length + 1);

    if (currentLetter.value === word) {
      clearInterval(typingInterval);
      showCursor.value = false;
      setTimeout(() => {
        currentIndex.value = (currentIndex.value + 1) % props.words.length;
        currentLetter.value = '';
        showCursor.value = true;
        startTyping();
      }, props.delay)
    }
  }, props.typingSpeed);
}

</script>