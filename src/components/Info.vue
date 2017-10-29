<template>
  <div class="offers-item">
  <table>
    <tr>
      <td rowspan="3" class="tooltip-picture">{{ item.picture }}</td>
      <td><h4>{{ item.title }} {{ calculateStars() }}</h4></td>
    </tr>
    <tr>
      <td colspan="2" class="offers-item-desc">{{ item.description }}</td>
    </tr>
    <tr>
      <td colspan="2" class="offers-item-pickup">Expires on {{ item.expiration | formatDate }}</td>
    </tr>
    <tr>
      <td colspan="2" class="offers-item-pickup">Pick this item up between <strong>{{ item.pickup_start | formatDate }}</strong> and <strong>{{ item.pickup_end | formatDate }}</strong></td>
    </tr>
  </table>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: ["item"],
  mounted() {
    this.stars = this.calculateStars();
  },
  methods: {
    calculateStars: function () {
      let str = ""
      for(let i=0;i<this.item.title.length%3+1;i++) str += "⭐"
      return str
    }
  }
};
</script>

<style>
.tooltip-picture {
  width: 50px;
  font-size: 3vw;
  text-align: center;
  vertical-align: middle;
}
table td {
  padding: 5px;
  vertical-align: top;
}
table * {
  margin: 0;
  padding: 0;
}
.offers-item {
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  color: #333;
  font-weight: 500;
  font-size: 18px;
}
.offers-item-desc {
  font-size: 14px;
  font-weight: 400;
}
.offers-item-pickup {
  font-size: 13px;
  font-weight: 400;
}
</style>