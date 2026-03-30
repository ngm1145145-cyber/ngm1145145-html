function scrollToTarget() {
    // 获取目标元素
    const target = document.getElementById('target');
    // 平滑滚动核心代码
    target.scrollIntoView({
        behavior: 'smooth',  // 平滑滚动（必填）
        block: 'start'       // 对齐方式：start=顶部对齐，center=居中
    });

}
function scrollToTarget() {
  document.getElementById('target').scrollIntoView({ behavior: 'smooth' });
}