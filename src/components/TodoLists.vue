<template>
  <main class="card">
    <div class="card-body p-4">
      <div class="form-group">
        <label for></label>
        <input type="text" name id class="form-control" placeholder aria-describedby="helpId" />
        <small id="helpId" class="text-muted">New Todo</small>
      </div>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary">Add +</button>
    </div>
  </main>
</template>

<script>
export default {
  name: "TodoLists"
};
</script>

<style scoped>
main {
  text-align: center;
}
</style>