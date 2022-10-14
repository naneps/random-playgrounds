<template>
  <div class="card w-full md:w-72 bg-base-100 shadow-xl image-full">
    <figure>
      <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Play Now</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "Name",
    },
    image: {
      type: String,
      default: "https://placeimg.com/400/225/arch",
    },
    link: {
      type: String,
      default: "",
    },
  },
};
</script>
<style>
</style>