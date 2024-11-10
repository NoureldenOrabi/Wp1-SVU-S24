// script.js

// التحقق من صحة النموذج
$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        if (name && email && message) {
            alert('شكرًا على رسالتك، ' + name + '!');
            $(this).trigger('reset'); // إعادة تعيين النموذج
        } else {
            alert('يرجى ملء جميع الحقول.');
        }
    });

    // تأثير تغيير لون الأزرار عند التمرير
    $('.btn').hover(
        function() {
            $(this).css('background-color', '#0056b3'); // لون أزرق داكن عند التمرير
        },
        function() {
            $(this).css('background-color', '#007bff'); // العودة إلى اللون الأصلي
        }
    );
});