<template>
	<div>
	<!-- 查询 -->
	<div class="session add-blacklist" v-loading="loading" element-loading-text="拼命查询中">
		<div class="search">
			就诊卡号：<input type="text" v-model="key" />
			<div class="btn">
				<button class="md-button md-blue-button" @click="patientSearch">搜索</button>
			</div>
		</div>
		<div class="detail" v-if="search.name">
			<div>
				<span class="label">姓名:</span>
				{{search.name}}
			</div>
			<div>
				<span class="label">性别:</span>
				{{search.sex==1 ? '男' : '女'}}
			</div>
			<div>
				<span class="label">年龄:</span>
				{{search.age}}
			</div>
			<button class="md-button md-blue-button add" @click="addToBlackList">加入黑名单</button>
		</div>
		<div class="detail" v-if="notFound==0">
			没找到相匹配的用户
		</div>
	</div>
	<!-- 搜索结果 -->
	<div class="session empty" v-if="!list || (list.length<=0)" v-loading="loading2" element-loading-text="拼命查询中">黑名单列表为空</div>
	<table class="auth-mgmt" v-if="list.length>0" v-loading="loading2" element-loading-text="拼命查询中">
		<thead>
			<tr>
				<th class="account">就诊卡号</th>
			    <th class="name">姓名</th>
			    <th class="role">原因</th>
			    <th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="user in list">
				<td>{{user.card}}</td>
				<td>{{user.name}}</td>
				<td>{{user.reason}}</td>
				<td>
					<button class="md-button md-blue-button md-green-button" @click="removeFromBlackList(user.card)">移出黑名单</button>
				</td>
			</tr>
		</tbody>
	</table>
	</div>
</template>

<script src="./blackListMgmt.js"></script>
<style src="./blackListMgmt.scss" lang="scss"></style>