<script setup>
import Modal from '@/components/common-components/Modal.vue';
import HeaderSection from "@/components/page-sections/LandingHeader.vue";
import Input from '@/components/common-components/Input.vue';
import Label from '../components/common-components/Label.vue';

import { ref } from 'vue';

const isModalActive = ref(true)
const inputVal = ref('')

</script>

<template>
  <div>
    <HeaderSection />
    <Modal v-if="isModalActive" title="Test Modal" @decline-modal="() => isModalActive = false">
      <div>
        <Label for="test">Label test</Label>
        <Input v-model="inputVal" w="w-full" id="test" /> {{ inputVal }}
      </div>
    </Modal>
    <div class="h-[1000px]"></div>
  </div>
</template>
