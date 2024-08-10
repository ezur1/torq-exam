import { defineStore } from "pinia";
import axios from "axios";

interface IPState {
  ipAddresses: Array<{
    id: number;
    ip: string;
    previousIp: string | null; // Store the previous IP to avoid unnecessary fetch
    country: string | null;
    countryCode: string | null;
    localTime: string | null;
    loading: boolean;
    error: string | null;
    timeIntervalId: number | null;
  }>;
}

export const useIPStore = defineStore("ipStore", {
  state: (): IPState => ({
    ipAddresses: [
      {
        id: Date.now(),
        ip: "",
        previousIp: null,
        country: null,
        countryCode: null,
        localTime: null,
        loading: false,
        error: null,
        timeIntervalId: null,
      },
    ],
  }),

  actions: {
    async fetchCountry(id: number, ip: string) {
      const ipRecord = this.getIpById(id);
      if (ipRecord) {
        if (ipRecord.previousIp === ip) return; // IP hasn't changed, no need to fetch again

        // Clear the existing interval if it exists
        if (ipRecord.timeIntervalId) {
          clearInterval(ipRecord.timeIntervalId);
          ipRecord.timeIntervalId = null;
        }

        ipRecord.loading = true;
        ipRecord.error = null;
        try {
          const response = await axios.get(`http://ip-api.com/json/${ip}`);

          if (response.data.status === "fail") {
            ipRecord.error = "Failed to fetch country";
            return;
          }
          ipRecord.country = response.data.country;
          ipRecord.countryCode = response.data.countryCode;
          ipRecord.localTime = this.getCurrentTime(response.data.timezone);
          ipRecord.previousIp = ip;
          ipRecord.timeIntervalId = this.runCountryLocalTime(
            id,
            response.data.timezone
          );
        } catch (error) {
          ipRecord.error = "Failed to fetch country";
        } finally {
          ipRecord.loading = false;
        }
      }
    },

    addIP(ip: string) {
      this.ipAddresses.push({
        id: Date.now(),
        ip,
        previousIp: null,
        country: null,
        countryCode: null,
        localTime: null,
        loading: false,
        error: null,
        timeIntervalId: null,
      });
    },

    runCountryLocalTime(id: number, timezone: string): number {
      const updateLocalTime = () => {
        const ipRecord = this.getIpById(id);
        if (ipRecord) {
          ipRecord.localTime = this.getCurrentTime(timezone);
        }
      };

      return window.setInterval(updateLocalTime, 1000) as unknown as number;
    },

    getCurrentTime(timezone: string) {
      const now = new Date();
      return now.toLocaleTimeString("en-US", { timeZone: timezone });
    },

    getIpById(id: number) {
      return this.ipAddresses.find((entry) => entry.id === id);
    },
  },
});
