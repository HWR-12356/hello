<template>
  <el-upload
    ref="upload"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :limit="1"
    :on-exceed="handleExceed"
    :auto-upload="false"
    :on-change="onSelectFile"
  >
    <template #trigger>
      <el-button type="primary">选择图片</el-button>
    </template>
  </el-upload>
</template>
<script lang='ts'>
export default {
  name: 'Upload'
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { genFileId } from 'element-plus'

import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
    console.log(upload.value, 'upload')
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}


const submitUpload = () => {
  upload.value!.submit()
}

const imageUrl = ref('')
const selectedFile = ref(null);


const emit = defineEmits(['selectImage'])
const onSelectFile = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file.raw);
  reader.onload = (e) => {
    imageUrl.value = e.target.result;
    selectedFile.value = file;

    console.log(selectedFile.value, e.target.result, file.raw, 'image---');
    emit('selectImage', imageUrl.value)
    
  }
}
</script>
