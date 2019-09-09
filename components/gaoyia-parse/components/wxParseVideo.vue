<template>
  <!--增加video标签支持，并循环添加-->
  <view :class="node.classStr" :style="node.styleStr">
    <video :class="node.classStr" class="video-video" :src="'https://wx.tbshou.com'+node.attr.src"></video>
  </view>
</template>

<script>
export default {
  name: 'wxParseVideo',
  props: {
    node: {},
  },
};
</script>
