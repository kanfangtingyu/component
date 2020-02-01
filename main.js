import './icons'  // 引入svg icon
import MsgBox from './components/MessageBox/index'  //  引入弹框
Vue.use(MsgBox)

// icon的调用：
// <svg-icon icon-class="文件名"></svg-icon>
// msgbox的调用：
// const title = '警告'
// const message =
// '确认结束？'
// this.$Message.confirm(title, message, function(result) {}