<template>
  <div class="note-form">
    <h3>添加备注</h3>
    <p>{{ selectedDate }}日：</p>
    <textarea v-model="note" rows="4" cols="30"></textarea>
    <button @click="saveNote">保存</button>
    <button @click="close">取消</button>
  </div>
</template>

<script>
export default {
  name: 'NoteForm',
  props: {
    selectedDate: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      note: '',
    };
  },
  methods: {
    saveNote() {
      // 在这里保存备注信息到数据库或其他地方
      console.log(`保存${this.selectedDate}日的备注：${this.note}`);
      this.close();
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.note-form {
  text-align: center;
}
</style>
