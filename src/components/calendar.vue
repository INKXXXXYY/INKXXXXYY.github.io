<template>
	<div class="calendar">
		<div class="header">
			<button @click="previousMonth">上个月</button>
			<h2>{{ currentMonth }}</h2>
			<button @click="nextMonth">下个月</button>
		</div>
		<table>
			<thead>
				<tr>
					<th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="week in calendar" :key="week">
					<td v-for="date in week" :key="date" @click="openNoteForm(date)">
						{{ date }}
					</td>
				</tr>
			</tbody>
		</table>
		<note-form v-if="showNoteForm" :selectedDate="selectedDate" @close="closeNoteForm" />
	</div>
</template>

<script>
	import NoteForm from './NoteForm.vue';

	export default {
		name: 'Calendar',
		components: {
			NoteForm,
		},
		data() {
			return {
				currentMonth: '',
				daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				calendar: [],
				selectedDate: null,
				showNoteForm: false,
			};
		},
		mounted() {
			this.updateCalendar();
		},
		methods: {
			updateCalendar() {
				// 获取当前日期和月份
				const now = new Date();
				const year = now.getFullYear();
				const month = now.getMonth();

				this.currentMonth = `${year}年${month + 1}月`;

				// 构建日历数组
				const firstDay = new Date(year, month, 1);
				const lastDay = new Date(year, month + 1, 0);

				const firstDayOfWeek = firstDay.getDay();
				const daysInMonth = lastDay.getDate();

				let date = 1;
				let calendar = [];

				for (let i = 0; i < 6; i++) {
					let week = [];

					for (let j = 0; j < 7; j++) {
						if (i === 0 && j < firstDayOfWeek) {
							week.push('');
						} else if (date > daysInMonth) {
							break;
						} else {
							week.push(date);
							date++;
						}
					}

					calendar.push(week);
				}

				this.calendar = calendar;
			},
			previousMonth() {
				const now = new Date();
				const currentMonth = now.getMonth();

				now.setMonth(currentMonth - 1);
				this.updateCalendar();
			},
			nextMonth() {
				const now = new Date();
				const currentMonth = now.getMonth();

				now.setMonth(currentMonth + 1);
				this.updateCalendar();
			},
			openNoteForm(date) {
				this.selectedDate = date;
				this.showNoteForm = true;
			},
			closeNoteForm() {
				this.showNoteForm = false;
			},
		},
	};
</script>

<style>
	.calendar {
		text-align: center;
		margin: 20px auto;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 5px;
		border: 1px solid #ccc;
		cursor: pointer;
	}

	.note-form {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		padding: 20px;
		border: 1px solid #ccc;
	}
</style>