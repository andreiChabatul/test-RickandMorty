<script setup lang="ts">
import { type ICharacter } from '@/types';
import Tag from 'primevue/tag';
import { reactive, watch } from 'vue';

interface IData {
  icon: string,
  title: string,
  value: string | number
}

const props = defineProps<{
  character: ICharacter
}>()
let dataDesc: Array<IData> = []

watch(props, () =>
  dataDesc = [
    {
      icon: 'pi pi-info-circle',
      title: 'Status',
      value: props.character.status
    },
    {
      icon: 'pi pi-prime',
      title: 'Species',
      value: props.character.species
    },
    {
      icon: 'pi pi-mars',
      title: 'Gender',
      value: props.character.gender
    },
    {
      icon: 'pi pi-map-marker',
      title: 'Location',
      value: props.character.location.name
    },
    {
      icon: 'pi pi-chart-bar',
      title: 'Amount episode',
      value: props.character.episode.length
    }
  ])

</script>

<template>
  <figure class="container-cart">
    <img :src="character.image" alt="character" />
    <figcaption>
      <h2>{{ character.name }}</h2>
      <li v-for="data in dataDesc">
        <h6 class="title-desc">{{ data.title }}</h6>
        <Tag severity="info" class="deck-item" :icon=data.icon :value=data.value></Tag>
      </li>
    </figcaption>
  </figure>
</template>

<style scoped>
.container-cart {
  position: relative;
  overflow: hidden;
  width: 350px;
  color: #141414;
  font-size: 16px;
  border-radius: 15px;
}

.container-cart * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.container-cart img {
  height: 250px;
  width: 100%;
  object-fit: cover;
  vertical-align: top;
}

.container-cart figcaption {
  width: 100%;
  background-color: #ffffff;
  padding: 15px 25px 35px;
  position: relative;
}

.container-cart figcaption:before {
  position: absolute;
  content: '';
  z-index: 2;
  bottom: 100%;
  left: 0;
  width: 100%;
  height: 80px;
  background-image: -webkit-linear-gradient(top, transparent 0%, #ffffff 100%);
  background-image: linear-gradient(to bottom, transparent 0%, #ffffff 100%);
}

.container-cart h2 {
  font-size: 1.3em;
  line-height: 1.2em;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 10px;
  white-space: nowrap;
}

.title-desc {
  color: gray;
  font-size: 14px;
}

.deck-item {
  padding: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin-bottom: 3%;
}
</style>
