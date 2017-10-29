<template>
    <div>
        <section>
            <h1>Profile</h1>

        </section>
        <section>
            <h1>Your Offers</h1>
            <div class="offers">
                <info v-for="item in offers" :key="item.id" :item="item" data-id="item.id"></info>
            </div>
        </section>
    </div>
</template>
<script>
import Info from '../Info.vue'

export default {
  name: 'Profile',
  data() {
    return {
      offers: []
    }
  },
  mounted: function () {
    this.fetchOffers()
  },
  methods: {
    fetchOffers: function () {
        let user = this.$store.auth.getUser()
        var self = this
        this.$store.getUserOffers(0, this.$store.auth.getAuthHeader()).then((s) => {
          self.offers = s
        })
    },
  }
};
</script>