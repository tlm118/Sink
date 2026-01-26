<script setup>
const { title, description, image } = useAppConfig()

useSeoMeta({
  title: `${title} - ${description}`,
  description,
  ogType: 'website',
  ogTitle: title,
  ogSiteName: title,
  ogDescription: description,
  ogImage: image,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      tagPosition: 'head',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icon-192.png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
  ],
})
</script>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const data = ref(null);
const error = ref(null);

const fetchData = async () => {
  try {
    const response = await axios.get('http://doc.7ge.top/', {
      validateStatus: () => true // 确保axios捕获所有状态码，包括重定向状态码
    });
    data.value = response.data;
  } catch (err) {
    error.value = err;
    if (err.response && err.response.status === 307) {
      // 处理307重定向，例如重新请求新位置
      window.location.href = err.response.headers.location; // 或者重新发起请求到新的URL
    }
  }
};
</script>


<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#000" />
    <NuxtPage />
    <Toaster />
  </NuxtLayout>
</template>
