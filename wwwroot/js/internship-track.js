document.addEventListener('DOMContentLoaded', function () {
    const progressFill = document.getElementById('progressFill');
    const activeStep = document.querySelector('.step.active');
    
    if (activeStep) {
        const stepNum = activeStep.getAttribute('data-step');
        // Calculate percentage: (step-1) / (totalSteps-1) * 100
        const percentage = ((stepNum - 1) / 3) * 100;
        
        // એનિમેશન સાથે પ્રોગ્રેસ બાર વધશે
        setTimeout(() => {
            progressFill.style.width = percentage + '%';
        }, 300);
    }
});