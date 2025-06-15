// 表单提交处理
document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('messageForm');

    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 获取表单数据
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // 在这里可以添加表单验证逻辑
        if (!validateForm(formData)) {
            return;
        }

        // 显示提交成功信息
        alert('感谢您的留言！我们会尽快回复您。');
        messageForm.reset();
    });

    // 表单验证函数
    function validateForm(data) {
        if (!data.name.trim()) {
            alert('请输入您的姓名');
            return false;
        }

        if (!data.email.trim() || !isValidEmail(data.email)) {
            alert('请输入有效的邮箱地址');
            return false;
        }

        if (data.phone && !isValidPhone(data.phone)) {
            alert('请输入有效的电话号码');
            return false;
        }

        if (!data.message.trim()) {
            alert('请输入留言内容');
            return false;
        }

        return true;
    }

    // 邮箱格式验证
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // 电话号码格式验证
    function isValidPhone(phone) {
        const phoneRegex = /^1[3-9]\d{9}$/;
        return phoneRegex.test(phone);
    }
});
