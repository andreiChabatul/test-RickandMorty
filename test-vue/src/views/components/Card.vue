<script setup lang="ts">
import { Status, type ICharacter } from '@/types'

defineProps<{
  character: ICharacter
}>()
</script>

<template>
  <RouterLink :to="{ path: 'cart', query: { id: character.id } }" class="article-container">
    <div>
      <img class="img" :src="character.image" alt="character image" />
    </div>
    <div class="desc">
      <div class="section section-one">
        <h2 class="name">{{ character.name }}</h2>
        <span class="status">
          <span class="status-icon" :class="{
            dead: character.status === Status.Dead,
            alive: character.status === Status.Alive
          }"></span>
          <span>{{ character.status }}</span>
          <span>&nbsp-&nbsp</span>
          <span>{{ character.gender }}</span>
        </span>
      </div>
      <div class="section">
        <span class="location">Last known location:</span>
        <span>{{ character.location.name }}</span>
      </div>
      <div class="section section-last">
        <span class="location">First seen in::</span>
        <span>{{ character.origin.name }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.article-container {
  transition: all .4s;
  text-decoration: none;
  width: 500px;
  height: 180px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.article-container:hover {
  transform: scale(1.05);
}

.img {
  width: 100%;
  height: 100%;
  margin: 0px;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
}

.desc {
  padding: 0.75rem;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.section {
  display: flex;
  flex-direction: column;
}

.section-one {
  -webkit-box-pack: start;
  justify-content: flex-start;
}

.section-last {
  -webkit-box-pack: end;
  justify-content: flex-end;
}

.name {
  font-size: 1.5rem;
  margin-bottom: 2%;
}

.status {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
}

.status-icon {
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(110, 106, 105);
  border-radius: 50%;
}

.dead {
  background-color: rgb(214, 61, 46);
}

.alive {
  background-color: rgb(85, 204, 68);
}

.location {
  color: rgb(158, 158, 158);
  margin-bottom: 2%;
}

@media (max-width: 700px) {
  .article-container {
    width: 90%;
    height: auto;
    margin: 0 auto;
  }

  .img {
    width: 200px;
  }
}

@media (max-width: 450px) {
  .article-container {
    width: 95%;
    flex-direction: column;
    align-items: center;
  }

  .img {
    width: 250px;
  }
}
</style>
