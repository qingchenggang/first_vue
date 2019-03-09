<template>
  <div class="partBox" :isdelete="isdelete">
    <div class="dateTitle">
      <p>{{day}}(<span>{{number}}</span>)</p>
    </div>
    <!--引入小组件smallPart的位置-->
    <smallPart></smallPart>

  </div>
</template>
<script>
  import smallPart from './smallPart'
    export default {
      components:{smallPart},
      name:'part',
      data () {
          return{
            day:'今天',
            number:1,
            isdelete: '',
          }
      },


    }
</script>
<style scoped>
.partBox{
  display: flex;
  margin-top: 20px;
  flex-direction:column;
}
.dateTitle{
  text-align: left;
  margin-bottom: 20px;
  font-size: 14px;
  color: #afb7c2;
}

</style>
