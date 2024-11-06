<template>
  <div class="sidebar w-64 bg-purple-800 text-white p-5">
    <div class="profile flex items-center mb-6">
      <img src="https://via.placeholder.com/40" alt="User" class="avatar w-10 h-10 rounded-full mr-3" />
      <span class="username font-semibold">Alya</span>
    </div>
    <input type="text" placeholder="Search note" class="search-bar p-2 rounded-lg w-full mb-4" />
    <button class="new-note-btn bg-red-500 text-white py-2 px-4 rounded-lg mb-4 w-full">New note</button>
    <nav class="menu">
      <a href="#" class="menu-item py-2 transform transition-all duration-200 ease-in-out hover:scale-105 hover:text-gray-300">Post</a>
      <a href="#" class="menu-item py-2 transform transition-all duration-200 ease-in-out hover:scale-105 hover:text-gray-300">Lists</a>
      <a href="#" class="menu-item py-2 transform transition-all duration-200 ease-in-out hover:scale-105 hover:text-gray-300">Recording</a>
      <a href="#" class="menu-item py-2 transform transition-all duration-200 ease-in-out hover:scale-105 hover:text-gray-300">Sketches</a>
      <a href="#" class="menu-item py-2 transform transition-all duration-200 ease-in-out hover:scale-105 hover:text-gray-300">Trash</a>
    </nav>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #4f3c75;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.profile {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.avatar {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.username {
  font-weight: bold;
}

.search-bar {
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
}

.new-note-btn {
  background-color: #ff5a5f;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 20px;
}

.menu {
  display: flex;
  flex-direction: column;
}

.menu-item {
  color: white;
  text-decoration: none;
  padding: 10px 0;
  transition: transform 0.3s ease, color 0.3s ease;
}

.menu-item:hover {
  transform: scale(1.05);
  color: #d1d1d1;
}
</style>
