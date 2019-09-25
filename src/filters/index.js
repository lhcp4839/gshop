import Vue from 'vue'
import format from 'date-fns/format'
// import moment from 'moment'

Vue.filter('date-format', function (value, formaStr = 'yyyy-MM-dd HH:mm:ss') {
  return format(value, formaStr)
})
/* Vue.filter('date-format', function(value, format) {
  return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
}) */