<template>
  <vCard class="mx-auto" width="650" max-width="650" border flat>

    <vCardTitle class="d-flex align-center">
      <span class="text-h6 font-weight-bold">IP Lookup</span>
      <vSpacer />
      <vIcon icon="mdi-close" size="x-small" @click="close" />
    </vCardTitle>

    <vDivider />

    <vCardText>
      <div class="subtitle-1 mb-4">Enter one or more IP addresses and get their country</div>

      <vBtn color="primary" @click="addNewIP">
        <vIcon left>mdi-plus</vIcon>
        <span>Add</span>
      </vBtn>

      <vDivider class="my-4" />

      <vRow v-for="(ipRecord, index) in ipStore.ipAddresses" :key="ipRecord.id" class="align-start">
        <vCol cols="1">
          <vAvatar class="borderless" color="grey-lighten-3" size="32">
            <span>{{ index + 1 }}</span>
          </vAvatar>
        </vCol>
        <vCol cols="8">
          <vTextField v-model="ipRecord.ip" :disabled="ipRecord.loading" :loading="ipRecord.loading"
            @blur="fetchCountry(ipRecord.id, ipRecord.ip)" :rules="ipRules" hide-details="auto"
            class="custom-styled-input" v-no-spaces />
        </vCol>
        <vCol cols="3" v-if="ipRecord.country">
          <div class="d-flex align-center pt-2">
            <img v-if="ipRecord.countryCode"
              :src="`https://flagcdn.com/24x18/${ipRecord.countryCode.toLowerCase()}.png`" alt="Country flag"
              :title="ipRecord.country" />
            <span class="ml-2">{{ ipRecord.localTime }}</span>
          </div>
        </vCol>
        <vCol cols="12" v-if="ipRecord.error">
          <div class="d-flex align-center">
            <vIcon color="error" class="mr-2">mdi-alert-circle</vIcon>
            <span class="error">{{ ipRecord.error }}</span>
          </div>
        </vCol>
      </vRow>
    </vCardText>

  </vCard>
</template> 

<script lang="ts">
import { defineComponent } from 'vue';
import { useIPStore } from '../stores/ipStore';

export default defineComponent({
  setup(_, { emit }) {
    const ipStore = useIPStore();

    const addNewIP = () => {
      ipStore.addIP('');
    };

    const ipRules = [
      (v: string) => !!v || 'IP address is required',
      (v: string) => validateIP(v) || 'Must be a valid IP address',
    ];

    const fetchCountry = (id: number, ip: string) => {
      if (validateIP(ip)) {
        ipStore.fetchCountry(id, ip);
      }
    };

    const validateIP = (ip: string) => {
      const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      return ipRegex.test(ip);
    };

    const close = () => {
      emit('close');
    };

    return {
      ipStore,
      addNewIP,
      fetchCountry,
      validateIP,
      close,
      ipRules
    };
  },
});
</script>
<style scoped>
.custom-styled-input :deep(.v-field__input) {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  min-height: 30px;
}

.borderless {
  border: none;
}
</style>