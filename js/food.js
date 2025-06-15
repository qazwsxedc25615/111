
document.addEventListener('DOMContentLoaded', function() {
    // 获取模态框元素
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];

    // 为所有研学路线图片添加点击事件
    document.querySelectorAll('.food-image img').forEach(img => {
        img.onclick = function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        }
    });

    // 点击关闭按钮关闭模态框
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // 点击模态框外部关闭模态框
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // ESC键关闭模态框
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});