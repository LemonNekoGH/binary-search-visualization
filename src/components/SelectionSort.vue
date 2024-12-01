<script lang="ts" setup>
import { ref, Ref, watch } from 'vue';

const smallest = ref(0);
const current = ref(0);
const numbers = ref<{ num: number, order: number }[]>([])
const outerPosition = ref(0);
const innerPosition = ref(0);
const paused = ref(true);
const showSwapAnimation = ref(true);

for (let i = 0; i < 10; i++) {
    numbers.value.push({
        num: Math.floor(Math.random() * 100),
        order: i
    });
}

async function sleep(ms: number) {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function waitUntil(condition: Ref<boolean>) {
    return new Promise<void>((resolve) => {
        const handle = watch([condition], (val) => {
            if (val) {
                handle.stop();
                resolve();
            }
        });
    });
}

async function selectionSort() {
    for (let i = 0; i < numbers.value.length; i++) {
        smallest.value = i;
        for (let j = i; j < numbers.value.length; j++) {
            current.value = j;
            if (numbers.value[j].num < numbers.value[smallest.value].num) {
                await sleep(500);
                smallest.value = j;
            }
            await sleep(500);
        }

        // swap order for animation
        [numbers.value[i].order, numbers.value[smallest.value].order] = [numbers.value[smallest.value].order, numbers.value[i].order];
        await sleep(500);
        
        // disable animation
        showSwapAnimation.value = false;

        // swap
        [numbers.value[i], numbers.value[smallest.value]] = [numbers.value[smallest.value], numbers.value[i]];
        await sleep(125); // wait for vue to update

        // enable animation
        showSwapAnimation.value = true;
    }
}
</script>

<template>
    <div style="text-align: initial;" class="flex">
        <div>
            <div :style="{ transform: `translateY(${current * 3}rem)` }"
                class="h-8 mb-4 b-white b-1px b-solid box-border bg-black flex items-center px-4 transition-transform duration-250ms ease-out">
                Current: {{ numbers[current].num }}</div>
        </div>
        <div>
            <div :style="{ transform: `translateY(${smallest * 3}rem)` }"
                class="h-8 mb-4 b-white b-1px b-solid box-border bg-black flex items-center px-4 transition-transform duration-250ms ease-out">
                Smallest: {{ numbers[smallest].num }}</div>
        </div>
        <div class="h-120">
            <div v-for="(n, i) in numbers"
                :style="{ width: `${n.num / 4}rem`, transform: `translateY(${n.order * 3}rem)` }" :class="{
                    'transition-transform duration-250ms ease-out': showSwapAnimation,
                }" class="absolute h-8 box-border b-white b-1px b-solid bg-black flex items-center pl-4">
                {{ n.num }}</div>
        </div>
    </div>
    <div class="h-8 mb-4" @click="selectionSort">Start Sorting</div>
</template>
