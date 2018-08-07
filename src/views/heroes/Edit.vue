<template>
	<div>
		<h2 class="sub-header">修改英雄</h2>
		<form>
			<div class="form-group">
				<label for="name">英雄名称</label>
				<input v-model="formData.name" type="text" class="form-control" id="name" placeholder="英雄名称">
			</div>
			<div class="form-group">
				<label for="sex">英雄性别</label>
				<input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="英雄性别">
			</div>
			<button  @click.prevent="handleEdit" type="submit" class="btn btn-success">Submit</button>
		</form>
	</div>
</template>

<script>
	//导入axios
	import axios from 'axios';
	//导出
	export default {
		props:['id'],
		data() {
			return {
				formData: {
					name: '',
					gender: ''
				}
			}
		},
		created() {
			//根据id请求，添加英雄
//			axios.get('http://127.0.0.1:3000/heroes/' + this.id)
			axios
			   .get(`http://127.0.0.1:3000/heroes/${this.id}`)
			   .then((response) => {
			   	if(response.status === 200) {
			   		console.log(response.data)
			   		this.formData = response.data;
			   	}
			   })
			   .catch((err) => {
			   	console.log(err)
			   })	
		},
		 methods: {
    // 点击按钮编辑英雄
    handleEdit() {
      axios
        .put(`http://127.0.0.1:3000/heroes/${this.id}`, this.formData)
        .then((response) => {
          if (response.status === 200) {
            // 跳转到列表
            this.$router.push('/heroes');
          } else {
            alert('失败');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style>

</style>