<template>
    <div class="profile-view">
        <section class="view">
            <div>
                <div> 
                    <img src="/static/img/avatar.png" class="avatar">
                    <p>{{ user.name }} ({{ user.email }})</p>
                </div>
            </div>
        </section>
        <section>
            <h1>Your Offers</h1>
            <div class="offers">
                <info v-for="item in offers" :key="item.id" :item="item" data-id="item.id"></info>
            </div>
        </section>
    </div>
</template>
<style>
.avatar {
    border-radius: 100px;
}
.profile-view {
    text-align: center;
    margin-top: 20px;
}
.profile-view div {
    display: inline-block;
}
</style>
<script>
import Info from '../Info.vue'

export default {
  name: 'Profile',
  data() {
    return {
      offers: []
    }
  },
  computed: {
      user: function(){
          return this.$store.auth.getUser()
      }
  },
  mounted: function () {
    this.fetchOffers()
  },
  methods: {
    fetchOffers: function () {
        let user = this.$store.auth.getUser()
        var self = this
        this.$store.getUserOffers(user.ID, this.$store.auth.getAuthHeader()).then((s) => {
          self.offers = s
        })
    },
  }
};
</script>