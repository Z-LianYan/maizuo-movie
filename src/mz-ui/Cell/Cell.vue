<template>
	<div class="cell">
		<div class="left">
			<div class="img-background img-box">
				<img width="100%" :src="src" alt="" />
			</div>
			<div class="info">
				<h4>{{title}}</h4>
				<p>{{label}}</p>
			</div>		
		</div>
		<div class="right">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Cell',
		props: {
			title: String,
			label: String,
			src: String
		}
	}
</script>

<style lang="scss" scoped>
	.cell {
		background: #fff;
		margin: 5px 0px;
		padding: 5px 10px;
		
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		
		.left {
			flex-grow:1;
			flex-shrink: 1;
			display:flex;
			align-items: center;
			overflow: hidden;
			.img-box {
				flex-shrink: 0;
				width: 0.5rem;
				height: 0.5rem;
				overflow: hidden;
			}
			.info {
				flex-grow: 1;
				flex-shrink: 1;
				overflow: hidden;
				h4 {
					width: 90%;
					color: #333;font-weight: bolder;
					overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				}
				p {
					font-size: 12px;color: #666666;
				}
			}
			
		}
		.right {
			flex-grow:0;
			flex-shrink: 0;
		}
	}
</style>