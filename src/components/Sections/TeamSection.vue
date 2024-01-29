<template>
  <base-section
    section-body-custom-class="d-flex justify-content-center"
    :header="true"
    :lg-container="false"
  >
    <template #headerTitle> Team </template>
    <template #headerSub> Meet Our Team </template>
    <template #headerParagraph
      >There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form.</template
    >
    <template #sectionBody>
      <div class="row container-lg">
        <div
          v-for="(member, index) in teamData"
          :key="index"
          class="col jump-in-element"
          :style="{ opacity: 0, 'animation-delay': `0.${index}s` }"
        >
          <team-card
            :name="member.name"
            :position="member.position"
            :img="member.img"
          ></team-card>
        </div>
      </div>
    </template>
  </base-section>
</template>

<script setup>
import { ref } from "vue";
import TeamCard from "../TeamCard.vue";

const teamData = ref([
  {
    name: "Leonard Krasner",
    position: "Senior Designer",
    img: "/src/assets/team/team1.jpg",
  },
  {
    name: "Leonard Krasner",
    position: "Senior Designer",
    img: "/src/assets/team/team2.jpg",
  },
  {
    name: "Leonard Krasner",
    position: "Senior Designer",
    img: "/src/assets/team/team3.jpg",
  },
]);
</script>

<style scoped>
.section {
  background-color: #fff;
}
</style>
