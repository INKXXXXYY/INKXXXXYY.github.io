<template>
  <div class="vue-calendar">
    <div class="calendar-title">
      <div>
        <p>
          <i class="icon-arrow-left-year calendar-icon" @click="lastYear"><<</i>
          <i class="icon-arrow-left calendar-icon" @click="lastMonth"><</i>
        </p>
        <p>
          <span>{{ year }} 年 </span>
          <span> {{ month + 1 }} 月</span>
        </p>
        <p>
          <i class="icon-arrow-right calendar-icon" @click="nextMonth">></i>
          <i class="icon-arrow-right-year calendar-icon" @click="nextYear">>></i>
        </p>
      </div>
    </div>
    <table id="table">
      <thead>
      <tr>
        <th v-for="item in weekArray" :key="item">{{ item }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in dateArr" :key="index">
        <td v-for="(val, num) in item" :key="num" @click="handle(val)"
            :class="{'today':setClassToday(val)}">

          <span :class="`${val.class}`">{{ val.day }}</span>

          <div v-for="(textItem, index) in infoArr" :key="index">
            <template v-if="textItem.day === val.day && textItem.month === val.month && textItem.year === val.year">
              <span v-show="textItem.count">（{{ textItem.count }} 条）</span>
              <div>
                <p v-for="(value, num) in textItem.taskCalendarList" :key="num">
                  {{ value }}
                </p>
              </div>
            </template>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  data() {
    return {
      activeIndex: null,
      dateArr: [],
      weekArray: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      day: new Date().getDate(),
      currentDate: new Date(),
      infoArr: [
        {
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          day: 14,
          count: 5,
          taskCalendarList: ['07:00 嗷嗷嗷', '08:00 酷酷酷', '13:35 水水水水水', '18:20 斤斤计较', '20:00 噢噢噢噢']
        }
      ]
    }
  },
  mounted() {
    this.createDate()
  },
  methods: {
    /**
     * 日期计算逻辑
     **/
    createDate() {
      this.dateArr = [];
      let arr = [];
      let count = 0;
      let date = new Date(this.year, this.month);

      // setMonth(4) === 5月份，4 + 1 = 6月份
      // setDate(0) 为 setMonth(4) 设置月份的上个月的最后一天
      // 如：当前为5月份，setMonth(4 + 1)为6月份，setDate(0)设置的就是5月份的最后一天
      date.setMonth(this.month + 1);
      date.setDate(0);

      let lastDay = date.getDate(); // 获取最后一天

      // 按当前月份共有多少天循环创建数组
      for (let i = 0; i < lastDay; i++) {
        date.setDate(i + 1); // 设置date，用于获取星期

        // 每7条数据生成一个数组
        if (count < 6) {
          count = date.getDay() === 0 ? 6 : date.getDay() - 1; // 一周中的某一天作为数组的下标，因为每月1号的周数不一样。0 是星期天

          arr[count] = {day: i + 1, week: date.getDay(), month: this.month + 1, year: this.year};
        }

        if (arr.length === 7 || i === lastDay - 1) {
          this.dateArr.push(arr); // 生成二维数组
          count = 0; // 置0，从新开始
          arr = [];
        }
      }

      /**
       *  表格第一行，计算上个月日期
       **/
      let firstWeek = null;
      let firstArr = this.dateArr[0];
      date.setDate(0);

      // 计算第一行数组还需要循环几次填充满
      for (let item of firstArr) {
        if (item) {
          firstWeek = item.week === 0 ? 6 : item.week - 1; // 计算还差几列没有数据
          break;
        }
      }

      let day = date.getDate();
      // 循环填充满第一列数组
      for (let i = firstWeek; i > 0; i--) {
        date.setDate(day--);
        firstArr[date.getDay() - 1] = {
          day: date.getDate(),
          week: date.getDay(),
          month: this.month,
          year: this.month === 0 ? this.year - 1 : this.year,
          class: 'not-current-month',
        };
      }

      /**
       *  表格最后一行,计算下个月日期
       **/
      let lastDate = new Date(this.year, this.month + 1);
      let lastWeek = null; // 获取最后一个周数
      let lastArr = this.dateArr[this.dateArr.length - 1];
      let lastDateArray = []; // 用于新增一行数组

      // 计算最后一行数组还需要循环几次填充满
      for (let i = 0; i < 7; i++) {
        if (typeof lastArr[i] === "undefined") {
          lastWeek = 7 - lastArr[i - 1].week; // 计算还差几列没有数据
          break;
        }
      }

      if (lastWeek > 0) {
        // 循环填充满最后一行数组
        for (let i = 0; i < lastWeek; i++) {
          lastDate.setDate(i + 1);
          lastArr[lastDate.getDay() === 0 ? 6 : lastDate.getDay() - 1] = {
            day: lastDate.getDate(),
            week: lastDate.getDay(),
            month: this.month + 2,
            year: this.month + 2 === 12 ? this.year + 1 : this.year,
            class: 'not-current-month',
          };
        }
      }

      // dateArr新增一行数组
      if (this.dateArr.length < 6) {
        for (let i = 0; i < 7; i++) {
          lastDate.setDate(lastWeek + i + 1);
          lastDateArray.push({
            day: lastDate.getDate(),
            week: lastDate.getDay(),
            class: 'not-current-month',
            month: this.month + 2,
            year: this.month + 2 === 12 ? this.year + 1 : this.year
          });
        }
      }
      if (lastDateArray.length > 0) {
        this.dateArr.push(lastDateArray);
      }
    },

    /**
     * 当天日期设置高亮
     **/
    setClassToday(val) {
      return val.month === (this.currentDate.getMonth() + 1) && val.day === this.day && val.year === this.currentDate.getFullYear();
    },

    /**
     * 日期点击事件
     **/
    handle(val) {
      this.activeIndex = val.day;
      // 点击灰色的日期，跳转月份
      if (val.class === 'not-current-month') {
        if (val.month > this.month) {
          this.nextMonth()
        } else {
          this.lastMonth()
        }
      }
    },

    /**
     * 上个月
     **/
    lastMonth() {
      this.month--;
      if (this.month === -1) {
        this.month = 11;
        this.year--;
      }
      this.$nextTick(() => {
        this.createDate()
      })
    },

    /**
     * 下个月
     **/
    nextMonth() {
      this.month++;
      if (this.month === 12) {
        this.month = 0;
        this.year++
      }
      this.$nextTick(() => {
        this.createDate()
      })
    },

    /**
     * 下一年
     **/
    nextYear() {
      this.year += 1;
      this.$nextTick(() => {
        this.createDate()
      })
    },

    /**
     * 上一年
     **/
    lastYear() {
      this.year -= 1;
      this.$nextTick(() => {
        this.createDate()
      })
    }
  }
}
</script>

<style lang="scss">
.vue-calendar {
  height: 800px;

  .calendar-icon {
    cursor: pointer;
  }

  .icon-arrow-right-year {
    margin-left: 20px;
  }

  .icon-arrow-left-year {
    margin-right: 20px;
  }

  .calendar-title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;

    & > div {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  #table {
    height: 100%;
    width: 100%;
    border-collapse: collapse;

    thead {
      text-align: center;

      tr {
        border: 1px #e2e2e2 solid;
        height: 50px;
      }
    }

    tbody {
      text-align: center;

      .today {
        background: #fb0;
        color: #ffffff;
      }

      td {
        cursor: pointer;
        width: 210px;
        border: 1px #e2e2e2 solid;
        padding: 0;
        font-size: 20px;
        position: relative;

        &:not(.today):hover {
          background: #e2e2e2;
        }

        & > span {
          position: absolute;
          top: 0;
          left: 10px;
        }

        .not-current-month {
          color: #c0c4cc;
        }

        div {
          height: 75%;
          position: absolute;
          width: 100%;
          bottom: 0;

          span {
            font-size: 20px;
            position: absolute;
            left: 30px;
            top: -32px;
          }

          div {
            position: relative;
            /*left: 23px;*/
            width: 100%;
            height: 100%;
            overflow: auto;

            p {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: 10px;
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
</style>