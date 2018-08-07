<template>
	<div>
		<h2 class="sub-header">英雄管理</h2>
		<!--<a class="btn btn-success" href="add.html">添加</a>-->
		<router-link class="btn btn-info" to="/heroes/add">添加</router-link>
		<div class="table-responsive">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>#</th>
						<th>姓名</th>
						<th>性别</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in list" :key="item.id">
						<td>{{ index + 1 }}</td>
						<td>{{ item.name }}</td>
						<td>{{ item.gender }}</td>
						<td>
							<!--<a href="edit.html">edit</a>-->
							<router-link class="btn btn-warning" :to="'/heroes/' + item.id ">修改</router-link>
							&nbsp;&nbsp;
							<!--<a href="javascript:window.confirm('Are you sure?')">delete</a>-->
							<a class="btn btn-danger" @click.prevent="handleDelete(item.id)" href="javascript:void(0)">删除</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	//导入axios
	import axios from 'axios';
	export default {
		data() {
			return {
				list: []
			}
		},
		created() {
			this.loadData()
		},
		methods: {
			loadData() {
				// 发送异步请求，获取数据
				axios
					.get('http://127.0.0.1:3000/heroes')
					.then((response) => {
						// console.log(response);
						if(response.status === 200) {
							this.list = response.data;
						}
					})
					.catch((err) => {
						console.log(err);
					});
			},
			//删除数据
			handleDelete (id) {
				//提示
				if(!confirm('是否要删除？')) {
					return
				}
				//发送请求 删除英雄
				axios
				   .delete(`http://127.0.0.1:3000/heroes/${id}`)
				   .then((response) => {
				   	if (response.status === 200 ) {
				   		this.loadData();
				   	} else {
				   		alert('删除成功')
				   	}
				   })
				   .catch((err) => {
				   	console.log(err)
				   })
			}
			
		}
	}
</script>

<style>

</style>