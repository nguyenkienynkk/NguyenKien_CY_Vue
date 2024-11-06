  <template>
    <div class="p-5 bg-indigo-800">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(note, index) in notes"
          :key="index"
          class="note-card p-10 rounded-lg text-cyan-950 font-bold cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          :style="{ backgroundColor: note.color }"
          @click="goToDetail(note.id)"
        >
        {{ note.title }}
      </div>
    </div>
    <button class="add-note-btn absolute bottom-5 right-5 w-12 h-12 bg-red-500 text-white text-3xl rounded-full flex items-center justify-center">
      +
    </button>
    </div>
  </template>

  <script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const notes = [
    { id: 1, title: 'My school notes that need to be sorted', color: '#d9aef9', detail: 'Details...' },
    { id: 2, title: 'Funny jokes', color: '#afffea', detail: 'Details...' },
    { id: 3, title: 'Travel bucket list', color: '#b3e5fc', detail: 'This is my detail' },
    { id: 4, title: 'Random cooking ideas', color: '#fff9c4', detail: 'Detail description function relative' },
    { id: 5, title: 'Album to listen', color: '#ffc1e3', detail: 'Change perform display' },
    { id: 6, title: 'Shopping list', color: '#b3e5fc', detail: 'This is note pate' },
    { id: 7, title: 'Books to listen', color: '#d9aef9', detail: 'No he is im post' },
  ]

  function goToDetail(id: number) {
    router.push({ name: 'post-detail', params: { id } });
  }
  </script>

  <style scoped>
  .add-note-btn {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: #ff5a5f;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  </style>
